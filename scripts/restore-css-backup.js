const fs = require('fs');
const path = require('path');

const BACKUP_DIR = path.join(__dirname, 'backup-css-prefix');
const SRC_DIR = path.join(__dirname, 'src');

function restoreBackups() {
  if (!fs.existsSync(BACKUP_DIR)) {
    console.log('❌ Aucun backup trouvé!');
    return;
  }

  const backups = fs.readdirSync(BACKUP_DIR);
  
  backups.forEach(backup => {
    const backupPath = path.join(BACKUP_DIR, backup);
    const fileName = backup.replace('.backup', '');
    
    // Rechercher le fichier original
    const searchFile = (dir) => {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          searchFile(fullPath);
        } else if (path.basename(fullPath) === fileName) {
          const backupContent = fs.readFileSync(backupPath, 'utf8');
          fs.writeFileSync(fullPath, backupContent);
          console.log(`✅ Restauré: ${fileName}`);
        }
      }
    };
    
    searchFile(SRC_DIR);
  });
  
  console.log('\n✅ Restauration terminée!');
}

restoreBackups();

