### 介绍
  基于React的一个本地minikube管理界面，通过Django后端调用API接口获取数据用以展示。
### 后端地址
[https://github.com/rkun0068/minikube_local_backend](https://github.com/rkun0068/minikube_local_backend)
### 界面展示
![image.png](https://cdn.nlark.com/yuque/0/2024/png/29558585/1705829558323-9ed19b26-40d7-4475-95d9-0b293e9eec1b.png#averageHue=%23f8f8f7&clientId=ueca9d727-6b7b-4&from=paste&height=838&id=u24e34088&originHeight=1048&originWidth=1860&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=149328&status=done&style=none&taskId=ueeb29647-37cc-4c56-ad3c-4300ddc1513&title=&width=1488)

### 项目启动
#### 安装依赖
```bash
npm install
```
#### 启动本地开发环境
```bash
npm run dev
```

### 项目结构
```bash
|-- index.html               # 主HTML文件，作为您的Web应用程序的入口点。
|-- package-lock.json        # 自动生成的文件，用于锁定每个安装的npm包的版本。
|-- package.json             # npm的配置文件，包含项目的元数据和依赖项。
|-- public                   # 存放静态资产的公共目录，这些资产将按原样提供（例如图像、字体）。
|   `-- vite.svg             # 示例静态资产（您可以在此处添加更多文件）。
|-- src                      # 源代码目录，您将在此处编写应用程序的主要逻辑。
|   |-- App.css              # 用于样式化主应用程序组件的CSS文件。
|   |-- App.jsx              # 主要的React组件或您应用程序的入口点。
|   |-- Components           # 用于组织React组件的目录。
|   |-- assets               # 存放项目特定资产的目录（图像、图标等）。
|   |-- css                  # 附加CSS文件的目录。
|   |-- index.css            # 用于样式化主HTML文件或全局样式的CSS文件。
|   |-- main.jsx             # 主JavaScript/React文件，其中初始化您的应用程序。
|   `-- router               # 用于组织与路由相关的目录。
`-- vite.config.js           # Vite的配置文件，用于配置构建工具和开发服务器的选项。

```

