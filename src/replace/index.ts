import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


export function replace(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
   const oldValue=options.oldValue;
   const newValue=options.newValue;
   const filePath=options.filePath;
    if (filePath) {
      // Check if file exists
      if (!tree.exists(filePath)) {
        throw new Error(`File ${filePath} does not exist.`);
      }

      const fileContent = tree.read(filePath)?.toString();
      if (fileContent) {
        // Replace oldValue with newValue
        const updatedContent = fileContent.replace(new RegExp(oldValue, 'g'), newValue);
        tree.overwrite(filePath, updatedContent);
        _context.logger.info(`Replaced '${oldValue}' with '${newValue}' in ${filePath}`);
      } else {
        throw new Error(`Cannot read file ${filePath}`);
      }
    } else {
      // Modify all files in the workspace
      tree.visit((filePath) => {
        if(filePath.includes('node_modules')){
          return;
        }
            const content = tree.read(filePath)?.toString();
        if (content) {
          const updatedContent = content.replace(new RegExp(oldValue, 'g'), newValue);
          tree.overwrite(filePath, updatedContent);
          _context.logger.info(`Replaced '${oldValue}' with '${newValue}' in ${filePath}`);
        }
      });
    }

    return tree;
  };
}
