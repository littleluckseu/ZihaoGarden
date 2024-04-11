一文带你过完公对彩虹面的 GTO 攻防策略，全程干货。 我们的场景还是 SB vs BTN 3OA pot，关于之前的 3OA 攻防策略的分析可以参考之前的文章。 
## 高张彩虹公对非连接面 

针对高张的公对面，其实 Flop 的策略比较简单，全部三高张肯定是全范围小注的策略，随着高张或者公对牌面变低，下注尺度变大，下注频率变小。 

**但回顾自己打牌过程中，面对公对面的尴尬情况往往在于 Flop 的小注被对手 call 住后，转牌自己仍然是空气不知道下注哪些诈唬组合。** 

还是老规矩，我们先来看对应的聚合报告。 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407161309.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407161322.png)

总结规律如下：
- A高的公对非连接面基本上 100% 全范围小注策略，KQJ的公对非连接面以 50% 75% 为主
- QJ高的公对非连接面会有一定频率的过牌频率，AK高几乎可以忽略过牌频率
- 公对越低，整体下注频率越重(75%为主) e.g J22,Q33 

Flop 的策略大多比较简单，在高牌面 BTN 也几乎没有 raise 的选项，所以我们可以很容易地进入转牌。 

### AATr
SB bet 20%，BTN call 后，Turn 的聚合报告如下所示（按照 OOP 的 EQ 降序排列）：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407164535.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407171508.png)

这里为什么发 9 和 发 A 对 SB 最好呢？因为 Flop 的小注基本上已经打盖对手的被盖两顶帽子的对子了，Turn 上发中低张约等于无关张。  

发 A 也很好理解，对手有 A 的概率更小了，我们有所有的超对和 A，所以可以看到发 A 会接着高频下注。 

以 AAT9 为例，我们重点关注一下持续下注的组合，并进行简化，然后去看类似的牌面是否也是同样的下注策略即可。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407165252.png)

AQo 及以下全部，对应的 AK-ATs 100%频率下注。Axs 小下注频率一半一半，QQ-JJ 会持续下注+大踢脚中对。 
Bluff combo 是一些卡顺的牌，整体下注都以小注为主。 

我们再来看看对 SB 不太好的转牌，比如说 K，T，这些牌对于 SB 而言都是高频率地过牌。

特别是我们很多的 Ax 小，因为 K 的发出很难拿到比我们小的牌价值（BTN Axs 其实不多），同时对手很多卡顺也反超了我们，所以变成全范围过牌。

这里关注我们的诈唬组合即可：低频的 low pair 88 99，低频卡顺的被盖帽对子，尺度以 75% 为主。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407171402.png)
### J33r

这里 SB 3OA 基本上是 100% cbet，尺度以 75% 为主。面对 SB 的 cbet，BTN 只有 TJs 有 raise 频率，其余可以忽略不计。

下面是 SB bet 75%，BTN call 的转牌报告，AKQT 的高牌对 SB 更好，叠牌 J 和 中低张牌对 BTN 更有利。 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407200052.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240407200149.png)

- 转牌AKQ高张，A Q以小注为主，K以中注为主，Q以小注为主+增加过牌频率 
- 其余中低张+叠牌都较高频率过牌+50%下注为主 

这里发高张的全范围策略就不需要我多说了，重点来看看 Turn 开中低张，SB 的诈唬组合选择有哪些？

ATs,KQs,A2s作为主要的诈唬组合，过牌大部分顶对顶T保护自己的过牌范围。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409111722.png)

再来看 Turn 上掉 4，下注频率增加（多出 99-TT 以及对应的带9和T的部分combo诈唬） 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409113530.png)

## 高张彩虹公对连接面 

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409114221.png)
- 规律几乎和之前一致，有所区别的是，因为牌面连接性更强，几乎没有 75% 下注选项

### KKTr

SB 全范围下注50%或者33%，SB call（没有raise选项），我们直接看转牌的聚合报告。 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409150545.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409150618.png)

（1）Turn 上开 A
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409154959.png)
开 A 虽然对我们的范围有利，但仔细观察上图所有顶对的 EQ，都不到 50%，因此这个牌面一定不要犯极化的错误，觉得开 A 很有利于自己的范围，然后开始拿着中等牌力猛锤。 

**因为面对 Flop SB 50% 的下注，BTN 这里留下来的范围其实很强了，一些 AJ，AQ 卡顺中顶对kick比我们大，QJs 的两头摇顺子也到以及所有的Kx。**


（2）Turn 上掉中低张 

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409160031.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240409160054.png)

整体的下注组合和诈唬组合基本一致：
- 价值组合：Kx 明三条，QQ-JJ
- Bluff组合：卡顺AQ,AJs,QJs,Q9s, 后门花的Axs, low pair 

用超强牌葫芦过牌来保护自己的过牌范围，同时过牌中对等一些中等牌力。 
### JJ8r 

这里我们挑选Flop聚合报告里 x 频率最高的一个牌面，和以往熟悉的 J 嗨牌面不同，没有 75% 的下注选择。 

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240410201647.png)

由于这里太多可以转牌的 line 了，比如说 bet-call, bet-raise-call, x-bet-call 等等，所以去讨论转牌的策略会很复杂，只能给大家自己去跑 Solver。

还有个比较有趣的问题分享一下：**为什么 JJ9r 的 x 频率显著低于 JJ8r？**

注：这里如果你使用不同版本的 solution，可能会得到不一样的结果。不过既然出现这样的结果，我们还是尝试去解释一下。

我这里总结了三点原因：
（1）SB 范围里有很多 9x 的3B组合，Flop 的 cbet 可以阻止不少 BTN 范围里两高张权益的实现，也可以攻击 BTN 的小手对
（2）BTN call 3b 范围里，带9的组合也比带8的组合多，所以 SB 的超对在 JJ9r 面能够更多地去攻击对手的听牌+中等牌力。
（3）JJ9r 连接性更好，SB 范围里的各种 Kx 的卡顺都可以下注，但 JJ8r 则会少很多下注组合

## 低张公对彩虹面 

还是同样的方法，我们来看 Flop 的聚合报告，寻找大致的规律。这次排序方式我们按照过牌频率从高到低降序排列。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240410162117.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240410162125.png)

- 整体下注尺度以 75% 为主，在 T公对面会有较高频率混合 50% 尺度下注 
- 牌面越低越连接，SB 的x频率越高
### 655r
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411111736.png)

这里的下注和诈唬的组合有了之前文章的铺垫比较好理解。

我们倾向于下注需要保护的超对，比如说 88-JJ，用不太需要保护的 AA-QQ 来保护自己的过牌范围。同时诈唬组合的挑选也是需要保护超对相关的组合，比如 TT 下注频率高，所以对应的 Tx 都有一定的诈唬频率。 

Flop 比较简单，我们直接看 Turn 上的处理。

（1）SB bet 75%, BTN call
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411114207.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411114215.png)

上面的 Turn 的聚合报告也不难理解，开叠牌和高张对 SB 无疑更有利。叠牌是降低了对手 set 的可能，高张更击中我们的翻前范围。 

但考虑到实际玩家池的漏洞，上面的聚合报告有些点需要注意：
- **BTN call range 里会有大量的 TT，所以开 T 不一定更有利。**
- Turn 上的高张比如 AKQ 对我们更有利，因为面对 Flop 75% 的下注，BTN 两高张一定是 overfold 的

（a) Turn 上 开 T
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411114721.png)

Turn 上开 T，我们的诈唬组合会很多，可以接着攻击对手被 T 盖帽的小手对，实际玩家池会 overfold 不少口袋对。 

(b) Turn 上开 7
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411115742.png)
7 是对 SB 最不利的一张转牌，这里我们会 x 绝大部分 miss 的两高张，同时用一些超对+超强牌来保护自己的过牌范围（AA,QQ,A5s）。

（2）Flop x-x 

一般 IP 的 x range 会特别弱，所以在 Turn 上我们会有很多牌进行超池攻击。 
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411121118.png)

这里贴几张截图，注意观察价值诈唬组合的选择。

（a) Turn 上掉 A
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411121218.png)

（b）Turn 上掉 8 or 9

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411121353.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20240411121438.png)

规律还是和之前一样，都是拿与需要保护的超对有关且没有 showdown value 的两高张去 Bluff。（Kx,Qxs等）

这里还剩下两条 line 没梳理（x-b-c,x-b-r-c)，留给大家自己去跑 Solver 体会，限于篇幅我就不再多贴截图了。 

## 小结 

公对面的 Flop 的策略会比较简单，特别是高张干燥面，我们可以无脑执行全范围策略，但在转牌上我们也会因此放弃不少诈唬牌，因为对手的 call range 也会相对而言变得更窄。 

**至此，SB vs BTN 3OA 的 Flop 牌面总结基本算告一段落了。**

可能后续还会单独出一篇文章探讨花色对于不同牌面的影响。关于转牌策略，因为涉及的牌面太多，这里也很难一一去分析探讨，希望有 Solver 的牌友自行花时间去研究总结。 

