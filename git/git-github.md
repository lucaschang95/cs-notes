# Git-Github

### 本地仓库的三个区域
------------------------

- **工作区(Working Directory)**：使我们直接编辑、直接操作的地方

- **暂存区(Stage 或 Index)**：数据暂时存放的区域，可在工作区和版本库之间进行数据的交流。

- **版本库(Commit History)**：存放已经提交的数据，push的时候，解释吧这个区的数据push到远程仓库。

- **工作区** 到 **暂存区** 使用`git add`命令

- **暂存区** 到 **版本库** 使用`git commit`命令

------------------------
### 常用命令
------------------------
**本地初始化新的仓库** `git init`

**添加文件到暂存区**
- `git add <file>`
- `git add -A`

**查看状态** `git status`

**查看修改内容** `git diff`
- `git diff` **工作区** vs **暂存区**
- `git diff head` **工作区** vs **版本库**
- `git diff --cached` **暂存区** vs **版本库**

**提交至Commit History** `git commit -m "your commit here"`

**同步至remote server/ remote repository** `git push`

------------------------

### 连接本地仓库与远程仓库
------------------------

`git remote add origin link` 其中 **link** 为远程仓库的地址
例如 `git remote add origin git@github.com:lucaschang95/TestGithubBranch.git`

**推送所有的本地分支** `git push --all origin`
------------------------

### 克隆远程仓库
`git clone <https/ssh>` 克隆对应的远程仓库
`git clone -b <branch> <https/ssh>` 克隆某一分支
------------------------

### 设置远程仓库URL
`git remote set-url origin git@github.com:lucaschang95/ComputerScience.git`
------------------------

### Branch 分支
------------------------

**查看分支**
`git branch` 查看本地分支
`git branch -r` 查看远程分支
`git branch -a` 查看所有分支（包括远程分支）

**创建/切换分支**
`git branch <name>` 创建名字为**name**的分支
`git checkout -b <name>` 创建（如果不存在）并切换**head指针**到**name**分支， -b 表示一步到位
`git checkout -b <branch name> <SHA1>` 以指定的某一个提交，创建一个新分支

**head指针** 记录当前工作的位置（分支）

**Merge 合并分支** `git merge <name>` 合并**namne**分支

**head指针** 记录当前工作的位置（分支）

**删除分支**
`git branch -d <name>`
`git branch -D <name>` 强制删除
`git push origin :<name>` 删除远程分支

------------------------

### 版本回滚
------------------------

**查看提交记录** `git log` 和 `git reflog` 可以查看每个版本对应的hash value

**版本回滚/切换** `git reset -hard version-hashcode` version-hashcode代表每一次提交时对应的hash value,也可以称为版本号。


------------------------

### ssh

- passwd root 设置root密码
- windows 下载winscp
- linux vi /etc/ssh/sshd_config
  - PermitRootLogin PasswordAuthentication 的value修改为 yes
- systemctl restart sshd
- winscp上协议选择scp协议
------------------------

### 参考
------------------------
- https://blog.csdn.net/qq_32452623/article/details/78417609
------------------------
