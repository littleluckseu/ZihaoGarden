3k字长文！全网最详细的 SB vs BTN 3POA GTO 攻防策略，绝对干货。

**SB 小盲位作为最差的位置，一般执行 3bet or fold 策略，但因为没有位置，加上翻后底池相比于 SRP 更大，更容易丢掉大 pot。** 

在之前的系列文章中，我们分析了在 BTN vs BB 的 SRP pot 里，高牌面和中低牌面的攻防策略。**不少牌面我都没有像之前一样，仔细总结下注和过牌的组合。** 强烈建议没有看过之前系列文章的读者朋友，先把之前的文章读一遍，然后再来学习本文。
BTN vs BB 高牌面攻防的 GTO 策略讲解：
https://zhuanlan.zhihu.com/p/682167073
https://zhuanlan.zhihu.com/p/682477380
中低彩虹面的 GTO 攻防策略：
https://zhuanlan.zhihu.com/p/683967554
## 高牌彩虹面攻防

### 非连接面

我们还是先来看看整体的聚合报告，对整体的下注策略有个大致的了解：
- 高高低，高中低的 A 高面基本上是全范围下注，以 20% 为主；K高面中的高中低，比如说 K92 K72 也是同理，以 33%或者50% 为主
- Q 嗨和 J 嗨 check 频率整体更高，牌面整体越低对 BTN 更有利

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321102937.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321102951.png)
我们这里挑选一些较难处理的 Board 来分析，像 AK2 这样的牌面相信就不用我多说了，大部分情况 SB 作为 3B 进攻方很难 miss，也能用范围优势去 cbet，处理不像别的面困难，只需要记住以 20% 小注为主就可。 
#### A84

（1）SB bet
这里我们可以整体简化尺寸为 33% 就行，方便记忆。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321105754.png)

面对 33% 的下注，BTN 的策略：

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321110856.png)
这里我们可以忽略 raise 的频率，防守的组合也好理解，这里笔者就不赘述了，有之前几篇文章的铺垫，相信大家能理解这里防守组合。 

比如 TJs 这里在很多 turn 出来都会变成强听牌，比如说 Turn 上掉 9，所以我们面对 33 %下注是会防守一定频率的后门花顺的组合。 

（2）SB x，BTN bet

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321105721.png)

面对 BTN 33% 的下注，SB 也几乎不会 raise，just call。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321111338.png)
#### Q84

（1）SB bet 50% 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321111550.png)


（2）SB x， BTN bet 20%

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321111723.png)

面对 BTN 20% Bet，SB 策略如下图：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321111901.png)

#### J72

（1）SB bet 50%（记住 J 嗨彩虹非连接一般是 50% 和 75% 为主）
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321111952.png)

面对 SB bet 50%，BTN的策略如下，没有挺难理解的地方，大家看图就行。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240321112042.png)

（2）SB x，BTN 策略

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240322144640.png)

面对 BTN 33% 下注：
因为本身 SB x 的频率不高，只有 27%，所以这里 SB fold 都是一些 Ax 小kick的空气。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240322144926.png)
### 连接面
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240322204005.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240322204020.png)

高张的连接面会有不少特别的地方，我们还是挑选一些难打的牌面来分析。观察上面的聚合报告，我们不难发现以下规律：
- 三高面除了 QJT，其余牌面都以 20% 为主，可以简化为全范围
- JTx 的一些牌面会有高频率的超池和 allin 选项
- 整体牌面越向中张靠拢，连接性越强，过牌频率越高。e.g J89，Q98, A98
#### QJT
QJT 这个牌面不同于其他三高张牌面，我们会有较高频率在 flop cbet 75%。

Flop SB cbet 75%，注意这里的  Bluff 组合，会有不少的 low pair，像 88 还会有一定频率的超池。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323184842.png)
面对 SB 75% 下注，BTN 会有低频率的 all in 组合，像 KQs，89s，AA等。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323185101.png)
####  JTx

这个牌面很特殊，在低级别也很少见人这么用过，flop 前位直接 3倍超池 allin 的操作还是很少见的。 

**对于低级别，个人建议还是不要轻易用这样的策略，两枪打光更好**，因为面对 3 倍超池 all in 能够 call 你的牌大多比你大。 

（1）JT8 面 SB flop bet：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323190428.png)

重点观察一下 all in 的组合，大多以有顶对+，两头摇，带对卡顺的（Qxs）为主。

面对 SB allin，BTN 的 call 组合：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323193709.png)

（2）SB flop x，BTN bet

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323194439.png)

这里也有部分 all in 组合，但还是那句话，低级别不要照着这么打，能 call 你的牌基本比你大。这里记住主要用 50% 去 stab 即可。 
#### K98 

建议对照着下面的 A98 的下注策略，理解软件选择的不同。
（1）SB flop bet 33% 

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324173512.png)

过牌组合：AQs,AJo,ATo,Ax小kick（不带后门花的为主），部分被盖帽的超对

面对 SB bet 33%，raise 频率较低，基本可以忽略。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324173920.png)

（2）SB x，BTN bet 20%

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324175208.png)

面对 BTN bet 20%：

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324175222.png)

x-r 组合：AKs，AQs，ATs，KQ，卡顺+听牌组合，两对+，低频 Ax空气小kick
#### A98

（1）SB bet 20% 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323194521.png)

下注组合：AK，AQs，KJ,KTs,QJ,QT, 低频率中对

整体 check 频率会比较高，因为这个面上 SB 的顶端范围优势并不明显（参考下图），BTN 绿线在最后领先 SB 的蓝线。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324113502.png)

面对 SB bet 20%，BTN 策略如下：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323194322.png)

（2）SB x，BTN bet 50%

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323194831.png)
下注 50% 为主，整体下注组合也比较好理解，只需要记得 bluff 一定频率 low pair 和 KTs 即可。

面对 BTN bet 50%：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240323194926.png)

## 中低彩虹面攻防
先来看整体的 Flop 聚合报告，通过聚合报告我们可以发现几点：
- **下注通常以 75% 为主，几乎没有超池下注。**
- **牌面越是连接，SB 的过牌频率越高**
- 牌面越低，反而更有利于翻前的激进者，比如说在 345 连接彩虹面，会有 10% 以上的超池选项。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240318160618.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240318160630.png)

高牌彩虹面相对而言比较容易处理，毕竟中牌了往往知道该怎么打，就算没中也知道自己有范围优势，下注比较果断。

在中低张的彩虹面，**我们在 SB 位会有大量的两高张 miss，需要重点关注 Solver 给出的下注组合。**

当然，在之后的文章中，我会继续讨论在 Turn 上的出张带来的策略改变，比如说当我的两高张下注被 call 住后，Turn 上仍然 miss 该怎么办？**这些都是在实际打 Zoom 时，我经常会觉得大脑一片空白的场景。**  

这次我们挑选五个比较有代表性的 board 来分析。在上面的聚合报告里，我按照 OOP vs IP 的权益降序排列。 

像 9 3 2 和 5 4 3 这两个 Board，OOP 的 EQ 是大于 IP的，也就是说 SB 更有范围优势。 

而像 863 的 Board，二者 EQ 相等，654 和 876 则是 BTN 的 EQ 更高。 

**在之前的文章中，我们提到过，范围优势决定下注频率。在没看 Solver 结果前，我们就不难发现，在 654 和 876 的面上，我们的过牌频率一定会更高。**

### 9 3 2

（1）SB Bet
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/932r%20SB%20Flop%20bet75.png)
这里的下注组合也不难理解，我们可以在上面的基础上进行适当的简化，比如全部采用 75% 的下注，下注频率为 40%。

整体下注的组合可以总结为：KK-TT,88,x9,xTs,QJ,Aks,AQo,低频率 Axs小kick。

注：像这里比如说 AQo 和 AQs 都有下注频率，我们可以把 AQs 的下注频率补充到 AQo ，这样我们拿 AQs 带后门花的组合过牌，AQo 整体下注。**这样更好记一点，也可以平衡两高张的下注频率。** 

再举个例子，比如说 KJs 和 QJs 都有下注频率，那么我可以拿更有发展但摊牌价值更差的 QJs 来全部下注，KJs 全部过牌。（因为 Turn 上发 T 可以形成两头摇）

面对 75% 的 SB 下注，BTN 的策略见下图：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240318201633.png)

解释一下，为什么这里 A5 和 88 有一定的 all in 频率？

**因为在 100bb 筹码深度下，如果面对 75% 下注 raise，对手 call 住基本上就套池了，如果我们想要 deny 对手两高张的 Equity，最好的办法就是 All in 打弃牌率。**

实际玩家池这里是蛮不平衡的，一般如果两高 miss 往往是小注为主，我们可以更高频地去 raise。

（2）SB check
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240318202119.png)
面对 SB x，BTN 会比较高频地用小注 stab，然后 SB 也会较高频率地 x-r，主要的组合都是超对以及一些纯 bluff 像 A8s。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240318202306.png)

因为面对 BTN 的小注 stab，SB 会有很多的 raise 组合是空气，因此面对 SB 的 x-r，BTN 可以选择再 allin 部分组合。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240318202801.png)

**但这里不建议在低级别这么尝试，因为面对 x-r 后再 allin 的行动线，在这样的彩虹面上几乎很少有 bluff。** 

我可以肯定低级别玩家池几乎不可能拿着 88 和 A5 这样的牌，面对 SB 的 x-r 再 allin。

### 5 4 3 
（1）SB bet
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/543r%20SB%20Flop%20bet125.png)

125% 和 75%尺度为主，整体 65% 的频率 check，下注组合为：

KK-88（越需要保护的超对尺度越大，频率越高）,x9s,QJs,Aks,AQo,A5s,A4s 

这里不难发现，除了 K9s 其余 Kx miss 基本上都是过牌，不会选择下注。

因为这里对手会防守大量的口袋对以及卡顺+后门花 Axs，如果不是下重注很难打走这些牌。 

但这么多 Kx 的组合肯定不能都拿来下注，所以选了最差的 K9 来作为空气的 Bluff 组合。 （一般来说，像这里的 99 下注频率最高，对应的一些 9x 的组合也会作为 Bluff 的选项）

面对 SB 75% 下注，BTN 防守下图的范围：

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240318204222.png)


（2）SB x

BTN stab 33% 小注，这里下注的组合也不难理解，**重点关注一下两高 miss 的下注组合。**

这里用于 stab 的有：AQ，Qxs，Kxs（KQs除外）


![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240319163900.png)

面对 BTN 33% 的 bet，SB 的策略如下图：

这里 SB 会高频 allin 一些需要保护的超对，比如说 TT JJ 这样的牌。

Bluff 的组合有：A5s,A7s,AKs,AQo，不带后门花的组合更高频率地 all in。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240319164551.png)

### 8 6 3

下注策略基本和 9 3 2 一致，75%为主，不过 SB 会有更高的 check 频率。这部分留给大家自己拿软件去跑跑试试。 

### 6 5 4 & 8 7 6

诸如 456 567 678 789 这样的三连张彩虹面，SB 的策略都可以简化为全范围过牌。

这里发生变化的是 89T 的连接面，因为我们很多的两高 miss 都会有卡顺或者两头摇的概念，下注频率自然变高了。 

（1）SB x，BTN cbet

这里 BTN 可以简化为全范围 stab 小注，不需要特别在意过牌的频率。因为在 876 的牌面上，BTN 有所有的顶端范围优势。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240319170229.png)

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240319170022.png)

面对 BTN 的下注，SB 的策略如下：

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240319170327.png)

x-r：QQ-88，A8s，AT，低频Ax小kick

和之前规律一样，我们的 TT 加注频率最高，所以对应的 Tx 都会有一定的 x-r bluff 的频率，其中拿 AT 作为我们主要的 Bluff 组合。

## 小结 
全文总结了高牌和低牌无对彩虹面的攻防策略，关于听花和公对面的策略后续再单独更新。

**另外实际玩家池的 call 3b range 和偏移也并没有考虑，接下来的文章会基于常见的玩家漏洞来 Nodelock 看看 Solver 的剥削策略如何。**

大家如果有 Solver 也可以自行去跑软件总结得失，然后用表格记录一下（如下图所示）
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324194034.png)

最后，我们再来总结一下，不同牌面 SB Flop 一些常见的策略和规律。 

（1）三高张或者两高张非连接面 

除了 QJT 以外，绝大部分 Flop SB 会全范围下注 20 %为主。

（2）HML or HMM （高中低或者高中中）面

**整体牌面连接性越高，中张更多，SB 过牌频率越高。**比如说 A65 的下注频率就比 A98 要高出 30%。

A，K 高面下注以轻注为主，Q，J 高面 75% 下注会更多。如下图所示，像 JLL 的牌面，大部分都是以 75% 下注为主。 

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324195802.png)

（3）中低牌面 

- 基本上下注以 75% 为主，很少的轻注选项。
- 中张连接面会高频过牌，比如说 876,987，到低张连接面543，反而下注频率会变高。
- 关于两高张 miss 的下注组合：优先选择不带后门花的 AKs，AQs 去下重注，其余的 Ax 空气组合高频过牌。然后根据我们会下重注的超对，比如说 TT 99 ，对应的 Tx，9x 的下注频率也会变高。（比如说下图 543，对应的 A9,K9,Q9s 都会有较高的下注频率）

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240324201439.png)

上述规律的总结纯粹是为了方便记忆，并培养对于不同牌面大概的感觉，不一定对于特定牌面正确，大家也可以自己去发现规律。 


**最后的最后，写这样的文章真的挺不容易，相比于直接告诉简易策略，看 Solver 会更加费劲，而且内容也会比较乱和冗长。** 如果觉得看完有收获，请一定一键三连一下~

后续我会继续更新 3pOA 里一些常见的错误和剥削策略，不妨点个关注支持一下~

本文参考的资料有：
- [GTO Wizard 3B OOP](https://app.gtowizard.com/coaching?video_id=0c07d5d6-0ff9-47fe-8a8a-a64508d39532&vid_formats=) （这个需要有 GTO Wizard 账号才能打开）
- @张不河 3oa 策略分享课程













