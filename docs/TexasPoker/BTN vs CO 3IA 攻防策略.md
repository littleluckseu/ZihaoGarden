关于 BTN vs CO 的 3IA 的策略，我们直接和 SB vs BTN 的 3OA 策略进行对比学习，对比 3OA 和 3IA 二者之间的策略差异，这样会理解得更加深刻。 

**不同于之前系列文章，现在的文章我会更着重于怎么去用 Solver 发现策略的规律，理解有利位置和不利位置进攻方的下注策略的差别。**

GTO 的学习肯定少不了自己去跑软件，但发现其中的规律，然后总结成自己的一套简化 GTO 策略更有利于我们在实战中去使用，而不是单纯纠结于某个牌面这么打究竟对不对。 

如果你没看过我之前的文章，强烈建议你阅读本文前先看看这篇如何系统性用 Solver 来学习的路径。
https://zhuanlan.zhihu.com/p/690607173
## 高张非连接彩虹面 

（1）BTN vs CO Flop 聚合报告 （按照进攻方 EQ 降序排列）

注：这里省略了常见的 AK2，AQ2这样的牌面，都是全范围小注即可
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240423171527.png)
（2）SB vs BTN 3OA  Flop 聚合报告
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321102951.png)

通过两个聚合报告对比，我们不难发现，OOP SB 整体 OOP x 频率会更高（37.2%），IP 的 BTN vs CO 中，BTN 的x频率只有 27.9%。

另外，IPA 的BTN 因为下注频率更高，所以几乎没有 75%的重注选项，而 OPA 的 SB 在许多 J 嗨面会用 75%的重注。 

## 高张连接彩虹面 

（1）BTN vs CO 聚合报告（按照 x 频率降序排列）

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512181733.png)

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512181828.png)

观察上面两张图的规律以及数据，我们可以总结如下：
- 天顺面，中间张的两头顺面 x 频率最高（e.g A98, QT9等)
- IP 很少会用比较极化的下注尺度，几乎可以忽略 75% 的下注频率
- 三高张的连接面整体下注频率并不高，**不要犯了全范围下注的错误**，可以打的更细致（e.g AJT, KJT,KQT)，总之带 T 的三高张天顺面 x 频率都会比较高（AKT除外，但不用记得那么细致，大家可以自行去跑软件看看下注诈唬组合的挑选）
（2）SB vs BTN Flop 聚合报告

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512182304.png)

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512182637.png)
规律总结：
- 因为连接面多了更多的听牌（卡顺+），所以 SB 在不利位置需要用更大的尺度去拒绝对手实现权益。比如上图中，JTx 牌面会有直接 Flop all in 的选择，而同样的场景在 BTN vs CO 中更多的小注
- Q嗨和J嗨的天顺面+中张连接面整体 x 频率相比于 IP，SB 的 x 频率会更高

BTN vs CO JT8 牌面策略：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512185951.png)
SB vs BTN JT8 牌面策略：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512190133.png)

还有一类有意思的牌面，作为进攻方的 BTN 和 SB 有很不一样的策略。

BTN vs CO 3IA：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512191204.png)
SB vs BTN 3IA：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512191225.png)

**关于这个问题，我询问了我的扑克教练，并没有太好的解释，有可能是选择 Solver 方案的问题。实战中全部 range bet 小注即可，不会有太大的 EV 损失。** 

有时候遇到软件不可理解的，也不要死磕为了方便记忆可以自行简化一部分的策略。

## 中低张彩虹面 

整个中低张彩虹面的策略比较起来会有挺大的不同，导致整体的策略会比前面的高牌面更加复杂。 

### BTN vs CO 
CO 位在中低张面，特别是连接面，有很高的 donk 频率，对于实际玩家池我想完全没有这么高的 Donk 频率。 

下图是 CO 的 flop 聚合报告，主要关注哪些牌面需要高频 Donk。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512220537.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240330143057.png)

但实际玩家池的在中低连接面 donk 频率应该远远小于 Solver 建议的频率，所以 donk 的手牌范围也会更强。 

我用 Nodelock 的功能重新构建了玩家池 donk 范围（手里对，小超对，draw），超强牌（顺子，set 普遍更倾向于 check）。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240428085003.png)
面对这样的 donk 范围，我们来看看 Solver 调整后的策略如何：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240428085030.png)

对比一下面对 CO donk 95%频率的 BTN 策略，不难发现我们放弃了绝大部分后门花的组合，因为对手的 donk 范围比之前强很多，然后选择一些 draw 和阻挡了超对的EQ比较低的高张作为 bluff combo。 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240428085300.png)
接下来，我们再简单地梳理一下面对 CO flop check，BTN 的策略。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512224751.png)
- 大部分下注尺度以 75% 为主，在中张连接面（T9x）下注尺度会变小
- 一些低张的连接面会有更多的重注选项，比如说超池下注

至于下注的组合也挺好理解，跟之前系列文章的一样，越需要保护的超对下注频率越高，同时挑选对应行列的诈唬组合。

比如说 TT 下注，对应的 KTs，QTs 就会有比较高的下注频率。（这里 ATs 不下注的原因是有一定摊牌价值且有后门 nuts 花，同时平衡下注频率）

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512225826.png)

### SB vs BTN 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512231218.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512231225.png)

我们对比看一下 SB 的策略，作为 3OA 的进攻方，在低牌面肯定 check 频率会更高，同时我们许多不需要的保护的超对，比如说 AA，KK 会更多地放入 check range 里保护我们的过牌范围。 

和之前一样，我们来看 872r 牌面的 SB 的策略，很容易发现我们超对的 x 频率增加了不少，同时减少了不少 Ax 的下注。 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240512231436.png)

## 小结 

还是那句话，想要学明白还得自己去不停地跑 Solver。这篇文章只是提供一个对比学习的思路，有许多可以展开讲的地方都没写出来：
- BTN vs CO 3IA，面对 CO 的 donk，BTN 的 raise 组合
- SB vs BTN 3OA，SB x-r 组合
- 具体牌面后续转牌聚合报告
- 其他更复杂的牌面：听花面，公对面
- ...... 

**希望这篇文章能够让你更好地理解怎么使用 Solver 去学习，明白不同位置带来的策略影响，做到在不同的牌面心里有数。**


更多我写的德扑和 GTO 干货文章请参考下方链接，另外我自己也有关于德扑的交流群，大家如果感兴趣可以通过我个人主页找我：

下方的文章建议按顺序阅读：

✨必看！如何利用 Solver 系统性学习 GTO 策略：
https://zhuanlan.zhihu.com/p/690607173
✨BTN vs BB SRP 攻防的 GTO 策略讲解：
https://zhuanlan.zhihu.com/p/682167073
https://zhuanlan.zhihu.com/p/682477380
https://zhuanlan.zhihu.com/p/683967554
✨SB vs BTN 3OA 策略总结：
https://zhuanlan.zhihu.com/p/688857320
https://zhuanlan.zhihu.com/p/692026699
✨5k字干货，K72 转牌策略分析：
https://zhuanlan.zhihu.com/p/681934996
✨剥削弃牌必看：
https://zhuanlan.zhihu.com/p/685538766
