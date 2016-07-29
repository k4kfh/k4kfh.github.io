---
layout: default
title: My Work
---

### Open Source

I've learned so much thanks to open-source software, so I've released a handful of my projects as open-source.

#### [ZephyrCab](https://github.com/k4kfh/ZephyrCab)

![](https://camo.githubusercontent.com/38b31a4c0b4e08aa0b236da0d82ec15e44ea2589/687474703a2f2f692e696d6775722e636f6d2f6e3037787874492e706e67)

- **Physics engine for realistic model train handling**
- Language: JavaScript/HTML/CSS

ZephyrCab is a browser-based software that uses a realtime physics engine to simulate realistic handling of model trains. It gives model trains the same complex controls as their real-life counterparts. ZephyrCab takes advantage of DCC sound decoders to play the sounds correct for the prototype based  on load, throttle position, and other conditions. It interfaces with your layout via JMRI's JSON WebSockets server, which means it supports practically any DCC system, including Digitrax LocoNet, NCE PowerCab, MRC Prodigy, and many more. This is a favorite project of mine, so if you're into model railroading be sure to check it out!

---

#### [TurningTables](https://github.com/k4kfh/turningTables)

- **Turntable indexing system for the Atlas HO turntable, powered by Arduino**
- Language: Arduino C

TurningTables is a lightweight, simple Arduino sketch that provides DCC indexing functionality for cheaper HO scale turntables, such as the classic Atlas turntable. It uses a hall effect sensor and a small neodymium magnet as a tachometer to track the turntable's position, and leverages the excellent [``madleech/ArduinoCMRI``](https://github.com/madleech/ArduinoCMRI) library to provide a simple interface to JMRI. This makes it possible to add graphical point-and-click control to almost any turntable, where in the past such features have only been found on expensive Walther's/Heljan turntables.

---