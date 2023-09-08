

之前的两篇文章里，我们重点讲到了单用户MIMO（SU-MIMO) ，但在大多数实际的通信系统中需要处理共享无线资源的多个用户。

如下图所示，假设每个用户都有 $N_{M}$ 根天线，基站 BS 有$N_{B}$ 根天线，那么我们不难发现，$K\times N_{M}$ 构成了一个虚天线集，我们可以把 $N_{B}\times KN_{M}$ 当成一个 MIMO 系统。

值得注意的是，MU-MIMO 本质上是一种特别的空间复用技术，因此

那 SU-MIMO 和 MU-MIMO 有什么区别呢？

在 SU-MIMO 中，如果我们采用预编码的方法，无论是上行还是下行，我们都可以从接受端的信道反馈信息（CSI）。
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230831101920.png)

在 MU-MIMO 中，如果是下行信道，也就是广播信道（Broadcast Channel, BC），单个用户是没有办法对接收的信号进行处理的，比如说，用户 1 没办法知道用户 2,3 收到的信道增益，也就很难对接收的信号进行处理。

比如说下图中，rx1 接收到 $y_{1}=h_{11}x_{1}+h_{12}x_{2}$ 的信号，但在接收端它没办法求解出 $x_{1}$。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230831104300.png)

那么上面这样的问题怎么解决呢？答案是进行预编码。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230831110539.png)

让我们把上述情况变成更加一般的形式：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230901115356.png)

这里的编码形式相信大家已经比较眼熟了，经典的 Zero Foring 形式，所以也叫做 ZF Beamforming（。不过，凡是要进行预编码，**我们都需要思考一个问题：发送端，也就是 BS，怎么从接收端获得信道反馈信息？**

在 5G 系统中，BS 会在给 UE 发送信号时发送 CSI Reference Signals （CSI-RS），这个信号是 BS 和 UE 都已知的信号，然后 UEs 接收到信号就会生成 CSI reports 反馈给 UE。

CSI report 包含了以下三种信息（英文应该更容易理解）：
- CQI (Channel Quality Indicator): Represents the channel's quality and helps the base station select an appropriate Modulation and Coding Scheme (MCS).
- PMI (Precoding Matrix Indicator): Suggests a precoding matrix for the base station to use, optimizing MIMO transmission.
- RI (Rank Indicator): Represents the number of optimal spatial layers or streams the UE can support.

这样 BS 接收到 CSI report 信息后，就可以用来进行预编码了。 

当然预编码的方式并不止 ZF 一种，在 [[MIMO-OFDM无线通信技术及MATLAB实现]]的第十三章里还提到了块对角化和脏纸编码两种预编码的方式，大家有兴趣的同学可以自行去阅读，这里就不再多说了。 

如果想参考对应的仿真代码，可以去看看陈老湿的这篇文章。我自己对 MIMO 这块还不是很熟悉，等之后自己上手撸一个 WiFi 标准下的 MU-MIMO 或许理解就更加深刻了。 
[第15章：多用户MIMO - 知乎](https://zhuanlan.zhihu.com/p/390646889)

## Reference
[5G | ShareTechnote](https://www.sharetechnote.com/html/5G/5G_MassiveMIMO_MU_MIMO.html) 
[WiFi | ShareTechnote](https://www.sharetechnote.com/html/WLAN_MU_MIMO.html) 