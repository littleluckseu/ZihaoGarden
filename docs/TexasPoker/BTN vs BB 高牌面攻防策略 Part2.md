在上一篇文章中，我们分析了不同的高张对于策略的影响，这次我们重点放在 A 高彩虹面的攻防上。

我们针对 BTN vs BB 的 A 高面的 Flop 策略进行一个汇总，以后遇到任何的 A 高面，我们都能知道一个大概的下注策略了。 先来直观地感受一下下注尺度和牌面的关系（下图来自 GTO Wizard 的聚合报告）。 
（1）连接
(a) 天顺面
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240103224309.png)
2，OSED
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240103224549.png)

（b）非连接
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240103223938.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240103224038.png)

总结一下普遍的规律：
- 范围优势越大，下注频率越高；但如果下注尺度越大，对应的下注频率也会越小 
- 整体而言，聚合报告给了我们一个对抗关系翻后的基准线，我们可以很清楚地观察到牌面变化所带来的下注频率的改变 
- 天顺面 GTO 很少超池下注，ALL 或者 AML 面都是以中小注为主

有了前面一篇的基础，我们这次挑选几个典型的牌面，来体会牌面连接性对于下注策略的改变。 
### E.g.1 BTN vs BB Flop AK9r 
这里不同大家认知的全范围 1/3 小注，所有的强牌基本上都是超池的大注为主，混合一些垃圾牌的超池下注 Bluff：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20231228234956.png)

如果这里的 K 变成更低的高牌，比如说 QJ，超池频率会有所下降，但改变不大，所以我们可以高频率地在这样的带 A 两高张牌面做1.25倍的超池下注。 

**我相信这里是和大家平时打牌最不一样的地方，假如说我们拿到了 KK，特别怕自己下大注，把对手打走了。**

在转牌那篇文章[[K72彩虹面转牌策略分析]]里，我提到了我们的盈利有两部分：摊牌盈利+弃牌盈利。
**我们往往会忽视了大量的弃牌盈利，而过分关注摊牌盈利。** 

首先，举个例子假设你拿到的是 AK，翻牌中顶两对，你的价值对象是什么？或者说你希望和对手打光的牌是什么？

一定是比你小的两对吧，比如说 A9 K9 这样的牌，就算我打超 pot，对手也能 call 住，而不是想去拿 Kx 以及各种被盖帽的口袋对的价值。

比起 10 bb 里，我打 3 bb，我打 20 bb 只要对面 7 次里能 call 一次，我就把损失拿回来了。 

但如果你本身是垃圾牌，你打一个小注或者中注，别人的 Kx call 住，转牌反而不知道该怎么办了。

但如果翻牌直接一个超池，你能打走所有的小于 K 的对子（下图还是 GTO 防守充足的情况，实际玩家池可能只会防到顶对）。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240215232348.png)

加上对手不可能有 AK KK AA 的强牌，我们可以在 turn 上还可以对对手的 Ax 小kick 持续施压。

在这篇文章后面的案例分析里，我就用纯空气打盖了对手的顶对中等 kick，大家可以去看看我的分析思路。与此同时，大家也可以对比一下 AK9 和这篇文章里 A72 两种牌面下注策略的改变，总的来说，牌面越低，超池下注的比例就更少。 

面对 BTN 高频率地超 pot 下注代表的极化牌力，BB 只有很少的 raise 频率，所以我们就不考虑 x-r 的组合了。

### E.g.2 BTN vs BB Flop AKTr

AK9 和 AKT 虽然很接近，但因为 AKT 有天顺的可能，而双方范围里 QJ 都是差不多的，所以在顶端 nuts 优势上，BTN 并没有领先。 

**有 Nuts 优势才会下重注，所以这里的超 Pot 下注的频率大大降低。但范围优势依然存在，我们的范围里好牌的范围远远强于 BB，所以可以较高频率地下注。**
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240216002316.png)

下图是二者的范围权益曲线，可以看到 BTN 绿线整体上都是领先 BB 的，但在最顶端的范围基本持平。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240216002942.png)
对比一下，AK9 的范围权益图，绿线全程领先，我们不仅有 nuts 优势也有范围优势，所以会是高频率地超池下注。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240216003109.png)

### E.g.3 BTN vs BB Flop A89r 
相比于 AK9 的牌面，很明显我们的超池频率降低了很多，超Pot的价值下注主要集中在两对+的牌力。

有了之前文章的铺垫，我们应该能够很好地理解软件挑选价值和诈唬组合的选择了。

价值：Ax 大kick，两对+
诈唬：卡顺+，一些无摊牌价值的 Qx Jx 等组合

这里值得注意的是，相比于 A72 这样的牌面，我们中对以及底对的过牌频率会更高。

我自己的理解是，这个面上我们的中对或者底对，下小注很难打走那些听牌，下重注又不合理，对手很多的卡顺+的听牌都会 call 住。 

**但像 A72 的牌面，如果我们用底对，中对 cbet 能够打走很多 Qx Kx的空气，因为几乎没什么听牌，可以阻止对手实现权益。**

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240215234817.png)

面对 BTN 33%下注，BB 的策略如下：

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240216001309.png)

这里的 x-r 组合也很好理解了，我就不赘述了。 
### E.g.4 BTN vs BB Flop A34r
经过上面的分析，相信大家已经有感觉了，A34r 可以试着自行总结软件给出的价值和诈唬组合。 我把 Solver 的图贴给大家，这里就不多说了。 

（1）BTN vs BB  BB x，BTN bet
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/A34r%20BTN%20Flop%20bet33.png)

（2）BTN bet 33%， BB call & raise

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240216001009.png)

## 总结 

经过这两篇文章，相信大家应该对 BB vs BTN 高牌彩虹面的攻防有了一个清晰的认知。

**还是那句最关键的话，权益决定下注频率（范围优势），Nuts 优势决定下注尺度，下注尺度越大，对应的下注频率就会更低。**

像 AK2，AT2，A72 的彩虹面，BTN Flop 的下注策略分别是高频超池，轻重注结合，轻注为主。 

像 AKT，A89，A34 这样的连接面，BTN Flop 的过牌频率越来越高，同时下注很少会有超 pot 的选项。 

与此同时，通过 GTO 的学习，我们可以发现一些普遍玩家容易犯的错误：
- 干燥面的 x-r 的 Bluff 严重不足，面对 x-r 的抵抗也不足
- Flop 容易在高牌面过度 cbet，导致过牌范围会很弱
- 频率极低的超池下注，往往过分关注摊牌盈利

针对这些漏洞呢，我们可以有意识地偏离去剥削他们，关于剥削这块我还在研究，后续希望能够更好地结合实战和 Solver 给出更精细化的剥削策略。 

到此 SRP（Singe raised pot) 的 IPA 高牌面的讲解告一段落，后续我会继续对牌面进行分类整理，比如说公对面，天花面，中低张连接面等等。 

大家如果有想要提前了解的话题，可以在评论区留言。输出不易，希望如果你觉得看了有收获可以花一秒时间点个赞~ 

**另外，有朋友私信我说建个交流群，大家可以通过我主页的背景图联系我。**
