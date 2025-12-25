const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

// Configuration des répertoires
const PAGES_DIR = path.join(__dirname, 'src', 'pages');
const COMPONENTS_DIR = path.join(__dirname, 'src', 'components');

// Fonction pour extraire le nom du fichier sans extension
function getFileName(filePath) {
  return path.basename(filePath, path.extname(filePath));
}

// Fonction pour préfixer les classes CSS
function prefixCSSClasses(cssContent, prefix) {
  // Regex pour capturer les sélecteurs de classe
  const classRegex = /\.([a-zA-Z_][\w-]*)/g;
  
  const prefixedCSS = cssContent.replace(classRegex, (match, className) => {
    // Ne pas préfixer les classes qui commencent déjà par le préfixe
    if (className.startsWith(`${prefix}-`)) {
      return match;
    }
    // Ne pas préfixer les pseudo-classes ou animations
    if (className.includes(':') || className.includes('@')) {
      return match;
    }
    return `.${prefix}-${className}`;
  });
  
  return prefixedCSS;
}

// Fonction pour préfixer les classNames dans JSX
function prefixJSXClasses(jsxContent, prefix) {
  try {
    // Parser le code JSX
    const ast = parse(jsxContent, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript']
    });

    // Parcourir l'AST et modifier les classNames
    traverse(ast, {
      JSXAttribute(path) {
        const attributeName = path.node.name.name;
        
        if (attributeName === 'className') {
          const value = path.node.value;
          
          // Gérer les chaînes de caractères simples
          if (value.type === 'StringLiteral') {
            const classes = value.value.split(' ');
            const prefixedClasses = classes.map(cls => {
              if (cls && !cls.startsWith(`${prefix}-`)) {
                return `${prefix}-${cls}`;
              }
              return cls;
            });
            value.value = prefixedClasses.join(' ');
          }
          
          // Gérer les expressions JSX (template literals, variables, etc.)
          if (value.type === 'JSXExpressionContainer') {
            const expression = value.expression;
            
            // Gérer les template literals
            if (expression.type === 'TemplateLiteral') {
              expression.quasis.forEach(quasi => {
                const text = quasi.value.raw;
                const classes = text.split(' ');
                const prefixedClasses = classes.map(cls => {
                  if (cls && !cls.startsWith(`${prefix}-`)) {
                    return `${prefix}-${cls}`;
                  }
                  return cls;
                });
                quasi.value.raw = prefixedClasses.join(' ');
                quasi.value.cooked = prefixedClasses.join(' ');
              });
            }
          }
        }
      }
    });

    // Générer le code modifié
    const output = generate(ast, {
      retainLines: true,
      compact: false
    });
    
    return output.code;
  } catch (error) {
    console.error(`Erreur lors du parsing JSX: ${error.message}`);
    return jsxContent;
  }
}

// Fonction pour traiter un fichier JSX/CSS
function processFile(jsxPath, cssPath) {
  const fileName = getFileName(jsxPath);
  const prefix = fileName;

  console.log(`\nTraitement de: ${fileName}`);
  console.log(`  JSX: ${jsxPath}`);
  console.log(`  CSS: ${cssPath}`);

  // Lire les fichiers
  let jsxContent = '';
  let cssContent = '';
  
  try {
    if (fs.existsSync(jsxPath)) {
      jsxContent = fs.readFileSync(jsxPath, 'utf8');
    } else {
      console.log(`  ⚠️  Fichier JSX non trouvé`);
      return;
    }

    if (fs.existsSync(cssPath)) {
      cssContent = fs.readFileSync(cssPath, 'utf8');
    } else {
      console.log(`  ⚠️  Fichier CSS non trouvé`);
      return;
    }
  } catch (error) {
    console.error(`  ❌ Erreur de lecture: ${error.message}`);
    return;
  }

  // Préfixer les classes
  const prefixedJSX = prefixJSXClasses(jsxContent, prefix);
  const prefixedCSS = prefixCSSClasses(cssContent, prefix);

  // Créer des backups
  const backupDir = path.join(__dirname, 'backup-css-prefix');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const jsxBackup = path.join(backupDir, `${fileName}.jsx.backup`);
  const cssBackup = path.join(backupDir, `${fileName}.css.backup`);

  fs.writeFileSync(jsxBackup, jsxContent);
  fs.writeFileSync(cssBackup, cssContent);

  // Écrire les fichiers modifiés
  fs.writeFileSync(jsxPath, prefixedJSX);
  fs.writeFileSync(cssPath, prefixedCSS);

  console.log(`  ✅ Fichiers traités avec succès`);
}

// Fonction pour parcourir un répertoire
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Traiter récursivement les sous-répertoires
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx')) {
      // Trouver le fichier CSS correspondant
      const baseName = getFileName(fullPath);
      const cssPath = path.join(directory, `${baseName}.css`);
      
      if (fs.existsSync(cssPath)) {
        processFile(fullPath, cssPath);
      }
    }
  });
}

// Point d'entrée principal
function main() {
  console.log('🚀 Début du préfixage des classes CSS...\n');
  console.log('═══════════════════════════════════════════\n');
  
  // Installer les dépendances si nécessaire
  console.log('Vérification des dépendances...');
  try {
    require.resolve('@babel/parser');
    require.resolve('@babel/traverse');
    require.resolve('@babel/generator');
  } catch (error) {
    console.log('\n⚠️  Installation des dépendances Babel nécessaires...');
    console.log('Exécutez: npm install --save-dev @babel/parser @babel/traverse @babel/generator\n');
    process.exit(1);
  }

  // Traiter les pages
  if (fs.existsSync(PAGES_DIR)) {
    console.log('\n📁 Traitement du répertoire PAGES...');
    processDirectory(PAGES_DIR);
  }

  // Traiter les composants
  if (fs.existsSync(COMPONENTS_DIR)) {
    console.log('\n📁 Traitement du répertoire COMPONENTS...');
    processDirectory(COMPONENTS_DIR);
  }

  console.log('\n═══════════════════════════════════════════');
  console.log('✅ Préfixage terminé avec succès!');
  console.log('📦 Backups sauvegardés dans: ./backup-css-prefix/');
  console.log('\n💡 Conseil: Testez votre application et vérifiez visuellement les changements.');
}

// Exécuter le script
main();

