# @schemcraft/replace

A custom Angular schematic to replace occurrences of a specified old value with a new value in your application files. This tool can be especially useful for refactoring and updating configurations throughout your codebase.

## Table of Contents

- [@schemcraft/replace](#schemcraftreplace)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Options](#options)
  - [Examples](#examples)
    - [Replace in Specific File](#replace-in-specific-file)
    - [Replace in All Relevant Files](#replace-in-all-relevant-files)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

You can install the package using npm:

```bash
npm install @schemcraft/replace
```

## Usage

After installation, you can use the schematic in your Angular project. Navigate to your Angular project directory and run the following command:

```bash
schematics @schemcraft/replace:replace --old-value="OLD_VALUE" --new-value="NEW_VALUE"
```

### Options

- `--old-value`: The value you want to replace (required).
- `--new-value`: The new value that will replace the old value (required).
- `--file-path`: (Optional) The path of the file where the replacement should be made. If not provided, the schematic will search through all relevant files in the project.

## Examples

### Replace in Specific File

To replace "hello" with "world" in a specific file:

```bash
schematics @schemcraft/replace:replace --old-value="hello" --new-value="world" --file-path="./src/app/app.component.ts"
```

### Replace in All Relevant Files

To replace "foo" with "bar" throughout the entire project:

```bash
schematics @schemcraft/replace:replace --old-value="foo" --new-value="bar"
```

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests to improve this schematic. Make sure to follow the [contribution guidelines](CONTRIBUTING.md) if you create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.