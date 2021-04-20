https://mp.weixin.qq.com/s/WJpoU66XyFif8REodHonGg

Git提供了丰富的分支策略和工作流方式，我们在深入学习业界Git工作流时，每种工作流都设计的非常好，似乎都能运用到团队实践。但在引入Git工作流规范开发时要留意：Git工作流仅仅是整个研发流程中的一环。上游项目管理/缺陷追踪系统虎视眈眈，下游CD(Continuous Delivery)嗷嗷待哺，还得考虑团队规模、产品形态、发版方式等等因素。因此，在团队中落地Git工作流规范并不是一件能轻松决定的事。

字节跳动Git仓库有效的CR(Code Review)覆盖率70%，仍有提升空间，通过调研，团队中又以GitHub Flow模式居多。随着字节研发效能建设愈发完善，GitHub Flow已无法充分利用研发设施进行提效并保障工程质量，很多团队均意识到这点并着手建设流程规范。

本文通过介绍业界Git工作流和公司研发设施现状，力求从仓库形态、部署流程等多角度进行分析，给出一些制定工作流规范的建议。

# 业界Git工作流介绍

## Git Flow

初级Git开发者，面对这满图的分支和merge指向，简直想手撕作者。高级Git开发者要将这个流程运用实践也大感头疼。

Git Flow有不少优点：

- 分支各司其职，覆盖大部分开发场景。
- 预期master分支中任何commit都是可部署的。
- 严格按照流程执行，出现重大事故的情形会大大降低。

缺点也不少：

- 过于繁琐，无法要求所有团队成员按照这个流程严格执行。
- 违反git提倡的short-lived分支原则。
- master分支历史记录并不干净，只能通过打Tag标记哪些是master真正要部署的。
- 对持续部署和monorepo仓库不友好。

## GitHub Flow

GitHub Flow是一个基于分支的轻量级工作流。它突出了CR的重要性，有助于我们掌握CR的开发模式，但它没有解答部署、环境、发布、集成等问题。

## GitLab Flow

GitLab Flow并不像Git Flow, GitHub Flow一样具有明显的规范，它更多是在GitHub Flow基础上，综合考虑环境部署、项目管理等问题而得出的一种实践。

### 基于环境

### 基于发布计划

## Trunk-based Flow

和“基于发布计划”的GitLab Flow类似，有一个主干分支接受所有开发者的commit，并为后续CI/CD提供关键助力。

按照官方文档描述：「你可以选择直接向主干分支提交代码的方式（适用于小团队）或者采用Pull-Request的方式，只要保证特性分支不能长期存在，并且产品是独立存在的。（the product of a single person.）」，trunk分支提交是比较随意的（不一定可部署），但也需要走CR，可以采用Fast-forward形式的merge保证主干是一条线，到了合适的时间点，checkout release-*分支，执行正式上线操作。

一旦发现release分支有hotfix需求，则先在trunk分支上进行fix开发，测试完成后，cherry-pick到release-_分支，确保修复代码即在release-_中上线，又能被下一个release周期包含。

## Aone Flow

按阿里云开发者社区描述：Aone Flow「基础玩法是将每条发布分支与具体的环境相对应，比如release/test分支对应部署测试环境，release/prod分支对应线上正式环境」，这种发布方式可保证每个feature都被测试，但不能保证release/test CI通过的feature，能在release/prod环境也通过（feature pick组合不同）。

「进阶点的玩法是将一个发布分支对应多个环境，比如把灰度发布和正式发布串在一起，中间加上人工验收的步骤」。实质是将基础玩法中的“release/test”，“release/prod”改成“release/combine-feature”，固定了feature pick组合，保证features在各个环境测试的一致性。

Aone Flow的pick模式，适合复杂仓库大团队持续上线，避免了Trunk-based Flow引入未完成feature的问题。但似乎不适合周期发版的要求。一个发版周期内会创建多个feature，上一个发版周期可能遗留若干feature，随着时间推移，feature数越来越多，最终发版人在pick feature过程中疯掉。

# 公司实践

## 多环境部署现状

### 服务端视角

### 前端视角

## 团队实践的Git工作流

### 单主干实践

#### 前端微服务管理平台

### 双主干实践

#### 私有云平台

#### 某业务中台

#### Jupiter工作流规范

### 三主干实践

#### 亿级App

# 总结

Git工作流是为了上线有保障，上线过程中充分测试必不可少，良好的Git工作流能保障测试是渐进且可靠的。环境管理和Git工作流结合在头条内部也形成了很多规范，包括「环境部署」、「流量调度」、「连通性测试」等使用规范；「限定场景允许」、「暂时场景允许」、「限定流程允许」等环境约束规范。再结合CI/CD，我们就可以全链路保障业务的快速迭代、安全上线。



# 参考资料

1. [Trunk-based Development vs. Git Flow](https://www.toptal.com/software/trunk-based-development-git-flow)
2. [Please stop recommending Git Flow!](https://georgestocker.com/2020/03/04/please-stop-recommending-git-flow/)
3. [Understanding the GitHub flow](https://guides.github.com/introduction/flow/index.html)
4. [Introduction to GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
5. https://cn.trunkbaseddevelopment.com
6. [在阿里，我们如何管理代码分支？](https://developer.aliyun.com/article/573549)
7. [谷歌的代码管理](http://www.ruanyifeng.com/blog/2016/07/google-monolithic-source-repository.html)