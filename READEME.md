## 使用tsconfig.json
1、不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录。
2、不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录。
3、当命令行上指定了输入文件时，tsconfig.json文件会被忽略。