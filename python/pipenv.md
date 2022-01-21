<!--
 * @Author: kingford
 * @Date: 2022-01-21 22:19:55
 * @LastEditTime: 2022-01-21 22:35:15
-->

# env

## pip

### 安装包

```bash
pip install SomePackage              # 最新版本
pip install SomePackage==1.0.4       # 指定版本
pip install 'SomePackage>=1.0.4'     # 最小版本
```

eg: 安装 django

```bash
pip install Django==1.7
```

### 使用镜像

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package
```

### 升级包

```bash
pip install --upgrade SomePackage
```

### 卸载包

```bash
pip uninstall SomePackage

```

### 搜索包

```bash
pip search SomePackage
```

### 其它

```bash
pip list
pip list -o  查看可升级的包

```

## pipenv

### 安装

```bash
 pip install pipenv
```

### cmd

```bash
# 安装包
$ pipenv install
# 激活当前项目的虚拟环境
$ pipenv shell
# 安装开发依赖包
$ pipenv install pytest --dev
# 图形显示包依赖关系
$ pipenv graph
# 生成lockfile
$ pipenv lock
# 删除所有的安装包
$ pipenv uninstall --all
```
