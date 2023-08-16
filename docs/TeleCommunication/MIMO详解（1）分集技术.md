## MIMO
MIMO 的基础定义我想大家应该都知道了，全称叫做 multiple-in multiple-out，目前算得上是通信技术中很重要的技术了，无论是 5G 还是 WiFi 标准里都有应用（只读这两个方面的标准）。

至于为什么用 MIMO 呢？我想道理也很简单，突出一个真理：人多力量大。

我一根天线发送的信息不够，我上百根天线同时发送，再加上上百根天线同时接收，那自然是大大提升了吞吐率。

当然上百根天线略微有些夸张（5G Massive MIMO 在 DL link 里最多能有 256 根天线），不过天线多了自然也有问题要处理。

关于 MIMO，大致可以分为两类：分集（diversity）技术和空间复用（spatial multiplexing）技术。

**天线分集技术通过多天线发送或者接收同一信息的信号来提高信息传输的可靠性。** 
分集技术的主要思想是将不稳定的无线时变衰落信道转变成像 AWGN 信道一样没有显著瞬时衰落的信道。

**空间复用技术是通过多天线发送不同的数据流从而提高数据的传输速率。**

## 天线分集

关于常见的分集方式，比如说空间分集，频率分集等，这里就略过不谈了，笔者这里重点说说 MIMO 系统里特有的两种分集：发送分集（Transmitter Diversity）和接收分集（Receiver Diversity）。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230816105122.png)


### 接收分集 （SIMO）
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230816105139.png)

关于接收分集的 SNR 增益，有两种常见的方法：选择合并（SC）和最大比合并（MRC）。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230816105323.png)

接收分集的缺点是接收端的**计算负荷很高**，这便可能导致下行链路中的**移动台的功率消耗很**大。

如果在发射端使用空时编码（Space-Time coding,STC）同样获得分集增益，而且接收端解码只需要做简单的线性处理。

具体的公式推导详见《MIMO-OFDM无线通信技术及MATLAB实现》第 10 章 ，这里偷个懒，不再推导一遍。 
### 发射分集（MISO）

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230816105151.png)

对于发射分集，又可以分为两类：不知道 CSI 信息和知道 CSI 信息，分别对应两种处理技术。

如果不知道 CSI 信息，我们可以采用空时编码的方式来获得分集增益，其中非常著名的编码方式为空时块码（Space-time Block Code, STBC），又称为 Alamouti 码。

这里同理，直接截取书中的内容，原理还是很好理解的：

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230814115333.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230814115347.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230814115416.png)

其实这里有个值得大家思考的问题：为什么我们需要进行 Alamouti 编码？从上面的推导中，我们不难发现， Alamouti 编码最大的好处是通过纯线性计算消除不同天线之间的干扰，并且不受信道条件变化的影响。

而如果我们只是单纯地重复发送一遍数据，信道条件可能仍旧很差，即使再发一遍对于信道条件差的信道所接收的信息并没有任何改善。

关于更加详细且易懂的证明步骤，可以参考：[Communication Technology | ShareTechnote](https://www.sharetechnote.com/html/Communication_ChannelModel_AlamoutiCode.html) 

下一篇文章，我会进一步整理总结 MIMO 中的复用技术。 

## Reference
- [陈老湿·通信MATLAB仿真 - 知乎](https://www.zhihu.com/column/c_1289896880982863872)  大部分里面提到的分集技术代码能够在这个系列的对应文章里找到，我偷懒就不必重复造轮子了。 
- 《通信之道 从微积分到 5G》杨学志 
- 《MIMO-OFDM无线通信技术及MATLAB实现》 