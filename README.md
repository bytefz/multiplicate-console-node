# Multiplication Table Console Application

This is a simple console application that prints out a multiplication table for the numbers 1 through x number, by deafult 10.

## Usage

First, install the dependencies.

```bash
npm install
```


Then, run the application and it will print out the multiplication table for the numbers 1 through 10.

```bash
node app -b 10
```

For showing the multiplication table in the console, use the -s or --show flag.

```bash
node app -b 10 -s
```

```bash
node app -b 10 -show
```

For changing the multiplication limit, use the -t or --to flag.

```bash
node app -b 10 -t 20
```

```bash
node app -b 10 -to 20
```


## Help Menu

To see the help menu, use the --help flag.

```bash
node app --help
```
###### *Output:*

```bash
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base                                                 [number] [required]
  -l, --listar   Muestra la tabla de multiplicar      [boolean] [default: false]
  -t, --to       Number multiplication limit              [number] [default: 10]
```