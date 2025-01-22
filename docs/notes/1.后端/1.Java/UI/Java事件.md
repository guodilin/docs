---
title: Untitled
createTime: 2025/01/06 15:40:12
permalink: /java/7b7jtksx/
---

## 事件

事件源：按钮 图片 窗体

事件：某些操作

    如：鼠标单击，鼠标划入

绑定监听：当事件源上发生了某个事件，则执行某段代码

键盘监听 KeyListener

鼠标监听 MouseListener

动作监听 ActionListener

**监听示例：**

::: code-tabs
@tab ActionListener

```java
package com.guodilin.Test;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Test1 {
    public static void main(String[] args) {
        JFrame frame = new JFrame();
        // 界面的宽高
        frame.setSize(603, 680);
        // 界面标题
        frame.setTitle("事件演示 1.0");
        // 是否显示在最上方
        frame.setAlwaysOnTop(true);
        // 设置位置居中
        frame.setLocationRelativeTo(null);
        // 设置关闭模式
        frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        // 创建一个按钮对象
        JButton jtb = new JButton("点击");
        // 设置按钮位置和宽高
        jtb.setBounds(0, 0, 100, 50);
        // 给按钮添加动作监听
        // jtb：组件对象，表示要给哪个组件添加事件，动作监听 ActionListener
        // new ActionListener()匿名类
        jtb.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("点击了我");
            }
        }
//                e -> {
//                    System.out.println("点击了我");
//                    System.out.println("dl");
//                }
        );
        // 把按钮添加到界面中
        frame.add(jtb);
//        frame.getContentPane().add(jtb);


        // 取消默认的居中放置
        frame.setLayout(null);
        frame.setVisible(true);
    }
}
```

::: code-tabs
@tab MouseListener

