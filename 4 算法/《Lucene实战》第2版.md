# 第1部分 lucene核心

## 第1章 初识lucene

### 1 应对信息爆炸

### 2 lucene是什么

2.1 lucene能做些什么
2.2 lucene的历史

### 3 lucene和搜索程序组件

3.1 索引组件
3.2 搜索组件
3.3 搜索程序的其他模块
3.4 lucene与应用程序的整合点

### 4 lucene实战：程序示例

4.1 建立索引
4.2 搜索索引

### 5 理解索引过程的核心类

5.1 indexwriter
5.2 directory
5.3 analyzer
5.4 document
5.5 field

### 6 理解搜索过程的核心类

6.1 indexsearcher
6.2 term
6.3 query
6.4 termquery
6.5 topdocs

### 7 小结

## 第2章 构建索引

1 lucene如何对搜索内容进行建模
1.1 文档和域
1.2 灵活的架构
1.3 反向规格化（denormalization）
2 理解索引过程
2.1 提取文本和创建文档
2.2 分析文档
2.3 向索引添加文档
3 基本索引操作
3.1 向索引添加文档
3.2 删除索引中的文档
3.3 更新索引中的文档
4 域选项
4.1 域索引选项
4.2 域存储选项
4.3 域的项向量选项
4.4 reader、tokenstream和byte[ ]域值
4.5 域选项组合
4.6 域排序选项
4.7 多值域
5 对文档和域进行加权操作
5.1 文档加权操作
5.2 域加权操作
5.3 加权基准（norms）
6 索引数字、日期和时间
6.1 索引数字
6.2 索引日期和时间
7 域截取（field truncation）
8 近实时搜索（near-real-time search）
9 优化索引
10 其他directory子类
11 并发、线程安全及锁机制
11.1 线程安全和多虚拟机安全
11.2 通过远程文件系统访问索引
11.3 索引锁机制
12 调试索引
13 高级索引概念
13.1 用indexreader删除文档
13.2 回收被删除文档所使用过的磁盘空间
13.3 缓冲和刷新
13.4 索引提交
13.5 acid事务和索引连续性
13.6 合并段
14 小结

## 第3章 为应用程序添加搜索功能

1 实现简单的搜索功能
1.1 对特定项的搜索
1.2 解析用户输入的查询表达式：queryparser
2 使用indexsearcher类
2.1 创建indexsearcher类
2.2 实现搜索功能
2.3 使用topdocs类
2.4 搜索结果分页
2.5 近实时搜索
3 理解lucene的评分机制
3.1 lucene如何评分
3.2 使用explain（）理解搜索结果评分
4 lucene的多样化查询
4.1 通过项进行搜索：termquery类
4.2 在指定的项范围内搜索：termrangequery类
4.3 在指定的数字范围内搜索：numericrangequery类
4.4 通过字符串搜索：prefixquery类
4.5 组合查询：booleanquery类
4.6 通过短语搜索：phrasequery类
4.7 通配符查询：wildcardquery类
4.8 搜索类似项：fuzzyquery类
4.9 匹配所有文档：matchalldocsquery类
5 解析查询表达式：queryparser
5.1 query.tostring方法
5.2 termquery
5.3 项范围查询
5.4 数值范围搜索和日期范围搜索
5.5 前缀查询和通配符查询
5.6 布尔操作符
5.7 短语查询
5.8 模糊查询
5.9 matchalldocsquery
5.10 分组查询
5.11 域选择
5.12 为子查询设置加权
5.13 是否一定要使用queryparse
6 小结

## 第4章 lucene的分析过程

1 使用分析器
1.1 索引过程中的分析
1.2 queryparser分析
1.3 解析vs分析：分析器何时不再适用
2 剖析分析器
2.1 语汇单元的组成
2.2 语汇单元流揭秘
2.3 观察分析器
2.4 语汇单元过滤器：过滤顺序的重要性
3 使用内置分析器
3.1 stopanalyzer
3.2 standardanalyzer
3.3 应当采用哪种核心分析器
4 近音词查询
5 同义词、别名和其他表示相同意义的词
5.1 创建synonymanalyzer
5.2 显示语汇单元的位置
6 词干分析
6.1 stopfilter保留空位
6.2 合并词干操作和停用词移除操作
7 域分析
7.1 多值域分析
7.2 特定域分析
7.3 搜索未被分析的域
8 语言分析
8.1 unicode与字符编码
8.2 非英语语种分析
8.3 字符规范化处理
8.4 亚洲语种分析
8.5 有关非英语语种分析的其他问题
9 nutch分析
10 小结

## 第5章 高级搜索技术

1 lucene域缓存
1.1 为所有文档加载域值
1.2 段对应的reader
2 对搜索结果进行排序
2.1 根据域值进行排序
2.2 按照相关性进行排序
2.3 按照索引顺序进行排序
2.4 通过域进行排序
2.5 倒排序
2.6 通过多个域进行排序
2.7 为排序域选择类型
2.8 使用非默认的locale方式进行排序
3 使用multiphrasequery
4 针对多个域的一次性查询
5 跨度查询
5.1 跨度查询的构建模块：spantermquery
5.2 在域的起点查找跨度
5.3 彼此相邻的跨度
5.4 在匹配结果中排除重叠的跨度
5.5 spanorquery类
5.6 spanquery类和queryparser类
6 搜索过滤
6.1 termrangefilter
6.2 numericrangefilter
6.3 fieldcacherangefilter
6.4 特定项过滤
6.5 使用querywrapperfilter类
6.6 使用spanqueryfilter类
6.7 安全过滤器
6.8 使用booleanquery类进行过滤
6.9 prefixfilter
6.10 缓存过滤结果
6.11 将filter封装成query
6.12 对过滤器进行过滤
6.13 非lucene内置的过滤器
7 使用功能查询实现自定义评分
7.1 功能查询的相关类
7.2 使用功能查询对最近修改过的文档进行加权
8 针对多索引的搜索
8.1 使用multisearch类
8.2 使用parallelmultisearcher进行多线程搜索
9 使用项向量
9.1 查找相似书籍
9.2 它属于哪个类别
9.3 termvectormapper类
10 使用fieldselector加载域
11 停止较慢的搜索
12 小结

## 第6章 扩展搜索

1 使用自定义排序方法
1.1 针对地理位置排序方式进行文档索引
1.2 实现自定义的地理位置排序方式
1.3 访问自定义排序中的值
2 开发自定义的collector
2.1 collector基类
2.2 自定义collector：booklinkcollector
2.3 alldoccollector类
3 扩展queryparser类
3.1 自定义queryparser的行为
3.2 禁用模糊查询和通配符查询
3.3 处理数值域的范围查询
3.4 处理日期范围
3.5 对已排序短语进行查询
4 自定义过滤器
4.1 实现自定义过滤器
4.2 搜索期间使用自定义过滤器
4.3 另一种选择：filterquery类
5 有效载荷（payloads）
5.1 分析期间生成有效载荷
5.2 搜索期间使用有效载荷
5.3 有效载荷和跨度查询
5.4 通过termpositions来检索有效载荷
6 小结

# 第2部分 lucene应用

## 第7章 使用tika提取文本

1 tika是什么
2 tika的逻辑设计和api
3 安装tika
4 tika的内置文本提取工具
5 编程实现文本提取
5.1 索引lucene文档
5.2 tika工具类
5.3 选择自定义分析器
6 tika的局限
7 索引自定义的xml文件
7.1 使用sax进行解析
7.2 使用apache commons digester进行解析和索引
8 其他选择
9 小结

## 第8章 lucene基本扩展

1 luke：lucene的索引工具箱
1.1 overview标签页：索引的全局视图
1.2 浏览文档
1.3 使用queryparser进行搜索
1.4 files and plugins标签页
2 分析器、语汇单元器和语汇单元过滤器
2.1 snowballanalyzer
2.2 ngram过滤器
2.3 shingle过滤器
2.4 获取捐赠分析器
3 高亮显示查询项
3.1 高亮显示模块
3.2 独立的高亮显示示例
3.3 使用css进行高亮显示处理
3.4 高亮显示搜索结果
4 fastvector highlighter类
5 拼写检查
5.1 生成提示列表
5.2 选择最佳提示
5.3 向用户展示搜索结果
5.4 一些加强拼写检查的考虑
6 引人注目的查询扩展功能
6.1 morelikethis
6.2 fuzzylikethisquery
6.3 boostingquery
6.4 termsfilter
6.5 duplicatefilter
6.6 regexquery
7 构建软件捐赠模块（contrib module）
7.1 源代码获取方式
7.2 contrib目录的ant插件
8 小结

## 第9章 lucene高级扩展

1 链式过滤器
2 使用berkeley db存储索引
3 wordnet同义词
3.1 建立同义词索引
3.2 将wordnet同义词链接到分析器中
4 基于内存的快速索引
5 xml queryparser：超出“one box”的搜索接口
5.1 使用xmlqueryparser
5.2 扩展xml查询语法
6 外围查询语言
7 spatial lucene
7.1 索引空间数据
7.2 搜索空间数据
7.3 spatial lucene的性能特点
8 远程进行多索引搜索
9 灵活的queryparser
10 其他内容
11 小结

## 第10章 其他编程语言使用lucene

1 移植入门
1.1 移植取舍
1.2 选择合适的移植版本
2 clucene（c++）
2.1 移植目的
2.2 api和索引兼容
2.3 支持的平台
2.4 当前情况以及未来展望
3 lucene.net（c#和其他.net编程语言）
3.1 api兼容
3.2 索引兼容
4 kinosearch和lucy（perl）
4.1 kinosearch
4.2 lucy
4.3 其他perl选项
5 ferret（ruby）
6 php
6.1 zend framework
6.2 php bridge
7 pylucene（python）
7.1 api兼容
7.2 其他python选项
8 solr（包含多种编程语言）
9 小结

## 第11章 lucene管理和性能调优

1 性能调优
1.1 简单的性能调优步骤
1.2 测试方法
1.3 索引-搜索时延调优
1.4 索引操作吞吐量调优
1.5 搜索时延和搜索吞吐量调优
2 多线程和并行处理
2.1 使用多线程进行索引操作
2.2 使用多线程进行搜索操作
3 资源消耗管理
3.1 磁盘空间管理
3.2 文件描述符管理
3.3 内存管理
4 热备份索引
4.1 创建索引备份
4.2 恢复索引
5 常见错误
5.1 索引损坏
5.2 修复索引
6 小结

# 第3部分 案例分析

## 第12章 案例分析1：krugle

1 krugle介绍
2 应用架构
3 搜索性能
4 源代码解析
5 子串搜索
6 查询vs搜索
7 改进空间
7.1 fieldcache内存使用
7.2 合并索引
8 小结

## 第13章 案例分析2：siren

1 siren介绍
2 siren优势
2.1 通过所有域进行搜索
2.2 一种高效词典
2.3 可变域
2.4 对多值域的高效处理
3 使用siren索引实体
3.1 数据模型
3.2 实现问题
3.3 索引概要
3.4 索引前的数据准备
4 使用siren搜索实体
4.1 搜索内容
4.2 根据单元限制搜索范围
4.3 将单元合并成元组
4.4 针对实体描述进行查询
5 在solr中集成siren
6 benchmark
7 小结

## 第14章 案例分析3：linkedin

1 使用bobo browse进行分组搜索
1.1 bobo browse的设计
1.2 深层次分组搜索
2 使用zoie进行实时搜索
2.1 zoie架构
2.2 实时vs近实时
2.3 文档与索引请求
2.4 自定义indexreaders
2.5 与lucene的近实时搜索进行比较
2.6 分布式搜索
3 小结

# 附录

## 安装lucene

a.1 二进制文件安装
a.2 运行命令行演示程序
a.3 运行web应用演示程序
a.4 编译源代码
a.5 排错

## lucene索引格式

b.1 逻辑索引视图
b.2 关于索引结构
b.2.1 理解多文件索引结构
b.2.2 理解复合索引结构
b.2.3 转换索引结构
b.3 倒排索引
b.4 小结

## lucene/contrib benchmark

c.1 运行测试脚本
c.2 测试脚本的组成部分
c.2.1 内容源和文档生成器
c.2.2 查询生成器
c.3 控制结构
c.4 内置任务
c.4.1 建立和使用行文件
c.4.2 内置报表任务
c.5 评估搜索质量
c.6 出错处理
c.7 小结

## 资源

d.1 lucene知识库
d.2 国际化
d.3 语言探测
d.4 项向量
d.5 lucene移植版本
d.6 案例分析
d.7 其他
d.8 信息检索软件
d.9 doug cutting的著作
d.9.1 会议论文
d.9.2 美国专利