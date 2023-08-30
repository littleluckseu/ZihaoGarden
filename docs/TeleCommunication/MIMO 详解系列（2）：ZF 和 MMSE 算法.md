开始j介绍信号检测之前，先问你一个问题：既然 MIMO 技术有两种分类：天线分集和空间复用，在 WLAN 网络里，我们用的是哪一种？或者说还是两者都用？

答案是两者都用，具体用哪种是根据实际的信道条件来决定。 

当信道条件差时，我们利用 MIMO 分集技术来增加传输数据的可靠性。比如说，AP（Access Point) 可以通过不同的天线发送相同的数据来提高传输的可靠性。

当信道条件好时，我们利用 MIMO 空间复用技术来提高数据传输速率。比如说，在不同的天线上发送不同的数据，最后在接收端再进行处理。 （参考下图中《5G: NR Bullet Points》中的 MIMO 部分）

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230829100027.png)

## 信号检测 

学长这里介绍最简单的两种信号检测的方法，ZF 检测（Zero-Forcing) 和 MMSE 检测（最小均方误差）。
### ZF 检测
这一小节我们解决三个问题：
- ZF 检测是什么？它有什么作用？
- 它的缺点是什么？
- 它的具体推导过程？

先来看定义：
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230829105437.png)

这里，我想做一个概念解析，相信不少同学也看到另外一个 ZF 均衡，那信号均衡和信号检测的区别在哪里呢？

总结来说：无论是 ZF 均衡还是 ZF 检测，它们具体的公式推导都是一样的，但二者的着重点不同。

**ZF 检测** 是为了在多用户以及多载波场景下来恢复单个用户或者载波的信号，而 ZF 均衡则是为了去抵消信道产生的影响，让我们所接收到的信号更接近于原始发送的信号。

在这里，我们用到的概念是检测，所以大家不要搞混了。 

第二个问题，ZF 检测有什么缺点？

（1）噪声增强

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230829110313.png)
重点关注我用红色方框圈出来的部分，这里表示的是使用 ZF 检测后，我们得到的噪声功率。不难发现，如果我们的 H 矩阵对应的特征值比较小（对应$\sigma_{i}$，这里得到噪声功率就会很大。 

（2）性能差距：相比于 MMSE 算法，没有考虑噪声的统计特性，所以检测性能自然会差一些，但胜在简单好用。 

第三个问题，具体的推导过程是怎样的？

这里允许我偷个懒，其实推导过程毫无难度，大家一眼就能看懂，重点是明白为什么。

具体请参考：[Zero Forcing](https://www.sharetechnote.com/html/Communication_ChannelModel_ZF.html)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230829111115.png)
![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230829111127.png)

### MMSE 检测 

这里直接上结论了：
$$
x_{MMSE}=(H^H H+\sigma^{2}_{z}I)^{-1}H^H y
$$

至于$w_{mmse}=(H^H H+\sigma^{2}_{z}I)^{-1}H^H$怎么得来的呢？其实就是解 $$
w_{mmse} = argmin ||X-w_{mmse}Y| |^2
$$
具体的推导过程还是参考 sharetechNote 网站上的对应部分，这里就略过不写了。 

[MMSE | ShareTechnote](https://www.sharetechnote.com/html/Communication_ChannelModel_MMSE.html)

最后，我们来比较一下两种方法受到噪声的影响程度（下图来自《MIMO-OFDM无线通信技术及其MATLAB实现》）。

![](https://image-upload-1307521651.cos.ap-nanjing.myqcloud.com/picture_upload/20230829164107.png)

不难发现，由于 MMSE 检测得到的噪声功率分母上多了 $\sigma_{z}^{2}$，所以即使$\sigma^{2}_{min}$ 很小，也不会像 ZF 噪声里那样让整个噪声变得很大，所以 MMSE 的性能也会更好。 


## 小结

关于 MIMO 的两大分类至此就介绍结束了，接下来的一篇文章，我会继续总结多用户 MIMO 的相关知识点。


