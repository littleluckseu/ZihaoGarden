最近可以说 ChatGPT 帮了我大忙，无论是平时的作业，还是准备面试，它都功不可没。

一个月没更新公众号，借着这个机会，浅浅地分享一下自己的心得体会。

## 信息交互方式的转变

目前不少人对于 ChatGPT 的认识还停留在「它是一个智能的搜索引擎」。

但 ChatGPT 的强大并不在于能够给你提供什么样的内容。不难发现，ChatGPT 有时候答案漏洞百出，还不如自己去网络上搜索得到的有用。

它真正的价值在于**转变了我们跟信息交互的方式——从我们寻找信息到信息来寻找我们。**

这句话什么意思呢？试想一个场景，假如说你想要研究一个陌生领域——智能音箱的人工智能产业链。

如果采用传统的方式，你需要先在搜索引擎搜索，然后点进去不同的链接，花费大量的时间提取有用的关键信息。 **这样分析，整理，提炼信息的能力并不是人人都具备的。**

但如今有了 ChatGPT，即使你只给出了有限的关键词信息，你会发现 ChatGPT 能输出许多你预料不到的背景知识，帮助你快速了解一个陌生领域的全貌。

**更重要的是，哪怕你看不懂它的解释，你也可以进一步在之前的答案基础上进行「小白式」询问。

最简单的就是让它：Provide an example about xxx。但是，如果你直接在搜索引擎上输入这样的要求，得到的结果大概不会让你满意。原因很简单，你提供的关键词太少了，但 ChatGPT 能够根据它的回答去提取有用的关键词。

因此呢，正确的方式应该给 ChatGPT 输入上下文语境，让它进行角色扮演，然后再进行问答对话。

当你尝试解决稍微复杂的问题时，ChatGPT 也不能一次给到满意的答案，但它能够根据你之前的语境和你的反馈不断调整，让回答变得越来越智能。 

我结合在网上看到的各种精华的 Prompts（提问）以及自己的使用心得，摸索出了一些 ChatGPT 的使用小套路。 

## Prompt 的优化思路 

我们先来看两个优质的 Prompt 案例：
（1）充当面试官 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230307200030.png)
（2）输出 Excel 表格 ![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230307195729.png)

分析一下上面两个 Prompt 的共同点，不难发现它们有这些模块：

（1）角色模拟 

你可以让 ChatGPT 扮演某一领域的专家，让它快速进入你所提问领域的背景中，这样在回答时答案会更加有针对性。 

举个我自己写的例子，之前有段时间帮别人修改文书，我寻思着能不能利用 ChatGPT 来优化整个流程（还在探索ing），供大家参考。 

> I want you to act as an American college officer in Engineering related department to recruit Master students. You are good at improving their Statement of Purpose to help them get admitted by the university.

（2）制定任务

> Your task is to improve a personal statement based on the university requirements. I will give you a Statement of Purpose (SoP) of a student. Then I'll give you the instructions step by step to improve the SoP. 

（3）设置完成路径 
Please follow the steps below to give advice: 

1.Check the full logic of whole content. This includes the logic between  paragraph and paragraph. For example, "With the rapid growth of AI in our daily life, I became interested in learning AI during my graduate study." This is a weak logic and it's not convincible because the candidates should provide more details about their unique experience.

2.Check the relevance of the candidate's experience with the major he or she is applying. For example, if he is applying for a major named Machine Learning and Data science, he should demonstrate more related technical experience or words in his experience, such as how to develop the corresponding algorithm, preprocessing the dataset before training.

3.Check the vague expression or sentence that you might think useless or do not convey sufficient information to knowing the candidate. Give advice on how to rewrite those vague expressions more specific.

为了让 ChatGPT 更好地理解，我甚至还增加了例子去进一步解释，也是希望它能更加准确地领会我的修改意图。 

（4）设定输出格式 

ChatGPT 输出的内容形式可以有很多，有时候有字数限制或者太杂乱。你可以通过设定具体的规则，来改变最后的文本呈现形式。 

像上面的两个例子中都有对输出格式的限定：
- Do not write explanations. Ask my questions one by one and wait for my answer. 
- I will write you formulas and you will only reply the result of Excel table as text. 

（5）约束条件 

举个例子， ChatGPT 润色或者改写英语材料时，时常会修改文本的原意，所以我经常会加上：Unless there are obvious error such as spelling errors, do not change the original meaning of the content。  

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/d1d6de048d0ccbbac797e41015ea494.jpg)

最后，我拿了一篇写的不太好文书给 ChatGPT 分析，最后的分析结果还算让我满意，但是更加细致的建议还是很缺乏，不过我们可以继续向它提问来进行优化。 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230311182008.png)

这里还是要给大家提个醒，**前面分享的 Prompt 优化思路适用于复杂且需要多次使用的任务。**

举个例子，比如说你经常需要总结整理开会的会议纪要，处理语音转文字的文稿。那么就非常值得你花上一两个小时，摸索出一个符合你要求的 Prompt，以后再总结会议纪要，直接沿用之前调试好的 Prompt 即可。 

**我专门在 Obsidian 里开了一页笔记来保留我常用且有价值的 Prompt 清单，保留一些我常用的 Prompt。**

你也可以根据你自己的需求，建立这么一个有用的 Prompt 库，来帮助你解决日常生活中方方面面的问题，真正让 ChatGPT 成为一个私人小管家。

## 资源分享 

最近由于 OpenAI 开放了 ChatGPT 的接口，所以许多有意思的衍生应用也如雨后春笋般出来了。 

分享三个有趣且实用的网站&插件：

（1）ChatGPT ShortCut

上面有许多优质 Prompt 供你挑选，还贴心地支持搜索功能。

> 链接在此：https://newzone.top/chatgpt/

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230311182748.png)


（2）ChatPDF

做科研的童鞋用来读论文的福音，直接扔给它一篇论文，你就可以通过提问的方式来获取相关的答案。非常适用于想要快速粗读论文的童鞋快速提炼信息。 

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230311182926.png)


（3）Awesome ChatGPT Prompts 

链接在此：https://github.com/f/awesome-chatgpt-prompts

安利一下这个 GitHub 仓库的桌面端 APP，可以自定义属于自己的 Prompt，并且保存下来。（详细功能见网站）

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230311183152.png)

## 一些思考 

前一段时间，我在刘润老师在自己的公号文章上说：

> 在前段时间，我们就和百姓网王建硕老师的团队合作，训练了一个叫“小润总”的机器人。 通过把我1000多万字的书稿、进化岛的问答、公众号和视频内容进行ChatGPT建模，同学们就可以直接向机器人提问，机器人可以从我历史的资料中组织出针对问题的定制的回答。 

或许在不久的将来，我们每个人都可以像付费买电一样，去购买自己的私人AI 小助理，让它去学习自己以前存留下来的数据和经历，在关键时刻给你提供最个性化的建议。 

举个例子，最近你书荒，想找一本新的书来看看。你的 AI 助手通过分析你的数据，可能会推荐两年前你随手写下但没看过的悬疑小说，可能会基于你目前正在研究的领域推荐一本好书，可能是你和朋友讨论过的一本书。 

**那这些数据从何而来？自然来自于平时的积累。**

熟悉我的读者知道，我以前在「知识管理」上下过不少功夫，费了不少心思来学习构建自己的「外脑」。

如今两年多过去，我已经积累下多达 1500+ 的笔记数量（见下图）。**但无论知识管理做的再好，也没法处理如此多的笔记数量，至少一半的笔记躺在某个角落无人问津。** 

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230311232034.png)


写到这里，我对未来真有这样的愿景：**每个人都能有自己的「外脑」+「内脑」，二者结合起来能发挥的作用想想就觉得令人期待。**

最后想说的是，ChatGPT 虽好，但不能贪多。**最好的方式是把 ChatGPT 当成拓展信息触及的工具，而不是代替我们去思考和决策。再说了，目前的 ChatGPT 生成的答案错也错的理直气壮，不加以辨别还真难说。**

