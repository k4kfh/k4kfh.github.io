# Installing Ubiquiti's Unifi Controller on Ubuntu 16.04 LTS Server

![](http://cdn.arstechnica.net/wp-content/uploads/2015/10/portal05-980x517.png)
_Screenshot by ArsTechnica_

## Intro

One of the key features of Ubiquiti Networks' Unifi access points is their centralized management. While many other companies have centralized management controllers for their APs, Ubiquiti offers great features at a much lower price point than other vendors.

For less than $90, you can get their Unifi AC AP Lite, which offers basic 802.11ac radios, passive PoE with the provided injector, and fully integrates with all the other Unifi APs. Their most expensive AP, the Unifi AC AP Pro, has support for standard 802.3af PoE, dual gigabit Ethernet interfaces for failover, and faster radios which offer the full 802.11ac speeds of up to 1300mbps. All the APs in their line also support other advanced features, such as guest portals and bandwidth monitoring, which are handled through the Unifi controller.

## Unifi Controller - How does it work?

The Unifi Controller is the basis for all the centralized management. It is accessible in any web browser, leaving you free to use whatever platform you want to configure your APs. The controller server is written in Java and runs on Apache Tomcat, but Ubiquiti provides excellent prebuilt packages that eliminate the need to configure Tomcat yourself. The controller runs on Windows, Mac OSX, and Linux, but I personally prefer running it on Linux because of the extremely low hardware requirements of a headless Linux server install.

## Networking/Subnetting your APs

You _can_ run the server on a different network than your APs (including in a cloud VPS such as Amazon's EC2, Linode, or Digital Ocean), but I generally recommend keeping them all on the same subnet for simplicity's sake.

> If you do not put them on the same subnet, you will need to set each AP's "Inform URL" separately to point to your controller server. It is possible, and works reliably once configured, but it is not covered in this tutorial.

### Security

If you're setting up these APs for a business, or you just want to be extra security-conscious, I recommend putting them on a separate management network that the main office network(s) cannot access. **For general home use, it is easier and more convenient to put the APs on your main network if you do not have a need for extremely secure management.**

---

## Installation

**1. Set up a basic Ubuntu Server 16.04 install.** Make sure to download package updates before continuing with ``sudo apt-get update && sudo apt-get upgrade``.

**2. Set a static IP.** You can do this by editing ``/etc/network/interfaces``.

**Interface Configuration:**

- Open the network interface config file by running ``sudo nano /etc/network/interfaces``
- There may be several lines of comments. You can "comment" a line in this file by prefixing it with ``#``. The ``#`` tells the system to ignore that line when reading the file. This is useful for configuration notes. The file should have the following lines:
```
auto eth0
iface eth0 inet dhcp
```
- Replace ``iface eth0 inet dhcp`` with the following:
```
iface eth0 inet static
    address the.ip.you.want
    netmask your.network.subnet.mask
    gateway your.gateway.ip.address
    dns-nameservers 208.67.222.222 208.67.220.220
```
*Substitute in the right information. If you're not sure what your subnet mask is, it's probably ``255.255.255.0``. If you're not sure what your DNS server(s) are, use the ones in the example above (those are OpenDNS's servers).*

- Reboot your system.
- Double check your network settings by running ``ping google.com``. If you get a response, your static IP is configured correctly!

**3. Add the APT repository to your ``sources.list``.** If you know what you're doing with APT, and want to stay on a specific version of Unifi, you can [read more about this repo here.](https://help.ubnt.com/hc/en-us/articles/220066768) If you're unsure, just follow the instructions below:

- Open ``/etc/apt/sources.list`` with your favorite text editor. Example Command: ``sudo nano /etc/apt/sources.list``.
- Add the following line to the bottom of the file: ``deb http://www.ubnt.com/downloads/unifi/debian stable ubiquiti``
- Save and exit. (In ``nano`` this is CTRL+X, Y for yes, and ENTER.)

**4. Add the GPG keys for the repository to your system.** Use the following command: ``sudo apt-key adv --keyserver keyserver.ubuntu.com --recv C0A52C50`` When you get done, it should say something like ``imported: 1`` at the bottom of your console.

**5. Update your package lists with ``sudo apt-get update``.** If you get any errors or messages that seem out of place, don't ignore them! Everything should be fine, though.

**6. Install the ``unifi`` package.** Run ``sudo apt-get install unifi`` to download and install the Unifi Controller and all its dependencies. This may take a few minutes depending on your internet connection speed; for me it required 162mb of downloads and 406mb of additional disk space.

**7. Restart your machine.** This is not a required step, but depending on what services were freshly installed on your machine as dependencies of the ``unifi`` package, it may help to do a quick reboot just to make sure everything is "normal".

**8. You're done! Log into the Unifi Controller's web UI and set up your new APs!** To access the controller, go to ``https://your-server-ip:8443/manage`` in a web browser. You should be left at Ubiquiti's Wizard for quick setup. You can skip this if you want, but it offers a faster way to set up basic networking features.

_This tutorial does not aim to cover configuring your APs through the Unifi controller, as there are other resources for that._
