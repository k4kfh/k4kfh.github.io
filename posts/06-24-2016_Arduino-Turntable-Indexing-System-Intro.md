---
layout: post
title: Arduino Turntable Indexing System: Introduction
---

Many of you are probably familiar with the Atlas HO scale turntable. It's cheap, it's easy to install, and it works pretty reliably. You can add a motor drive unit and connect it to a basic switch for a simple motorized turntable. This works well if you don't need a DCC turntable, but there's no easy way to add DCC indexing functionality aside from a very expensive $90 kit called the TXC-1. After looking at the TXC-1 and reading about how it worked, I set out to change that.

---
The TXC-1 worked by connecting a [hall effect sensor](https://en.wikipedia.org/wiki/Hall_effect_sensor) and mounting it inside the turntable's gearbox. By adding the sensor and mounting a small magnet on the gear, the hall effect sensor would function as a tachometer.

![](https://upload.wikimedia.org/wikipedia/commons/7/7e/Hall_sensor_tach.gif)

*A short animation demonstrating a hall effect sensor as a tachometer using two magnets. I only used one magnet in my turntable, but the concept is the same.*

So I set out to create essentially the same thing, except for less money, and by using an Arduino Uno and readily available electronics.

---
Fast forward a little while, and the mechanism/electronics are mostly done. I had to do a little bit of extra work to combat electrical noise produced by the motor in the Atlas drive unit (I soldered some capacitors to the motor itself and installed a choke on the hall effect sensor's data wire) but other than that no significant problems.

I have not yet written the interface to the layout, but I plan on using the ArduinoCMRI library with JMRI to make the turntable appear as a group of turnouts, exactly as a "real" indexing system (such as a Walthers brand turntable) would. Until then, here's a quick demo video to showcase the mechanism's basic functions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-zNWIkmaTNo" frameborder="0" allowfullscreen></iframe>

---
#### Questions? Post in this forum thread.](
