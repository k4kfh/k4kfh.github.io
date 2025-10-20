---
layout: home
---

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Image (left side on wide screens) */
.left {
  flex: 3;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
}

/* Text (right side on wide screens) */
.right {
  flex: 6;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  align-items: center;
}

/* -- On narrower screens, stack the image on top of the text rather than placing it beside it. -- */
@media (max-width: 768px) {
  .container {
    flex-direction: column;       /* Stack vertically */
    align-items: center;          /* Center image and text */
  }

  .left, .right {
    padding: 0px;                /* Also get rid of the padding in this narrower layout, so the margins match the less-heavily-formatted text underneath this area */
  }

  .left img {
    max-width: 100%;              /* Make image scale to screen width */
    height: auto;
  }
}
</style> 

<div class="container">
<div class="left">
<img src="/images/home-page-photo.jpg" alt="Profile Photo" style="border-radius: 50%; max-width:200px">
</div>

<div class="right">
<p>
Hi! I'm Hampton.
</p>

<p>
Officially, I'm an electrical engineer. My primary interest is in electronics design at the PCB level, and all the simulation and documentation tooling that goes along with it.
</p>
</div>

</div>

<p>
However, <em>unofficially</em>, I'm a programmer, maker, open-source hardware devotee, mechanical designer and <a href='https://en.wikipedia.org/wiki/Model_engineering'>model engineer</a>, enjoyer of the outdoors, and a lifelong railroading enthusiast.
</p>

<p>
Most importantly: eternally, I'm an imperfect Christ-follower, <a href='https://biblehub.com/ephesians/2-8.htm'>rescued by grace.</a>
</p>

I use this site as a portfolio for my open-source work and hobby projects, and to share my experiences as an engineer and maker.

I've spread my open-source work across a few platforms:
* **[GitHub](https://github.com/k4kfh)**: Most of my software, tooling, and electronics work lives here.
* **[GrabCAD](https://grabcad.com/hampton.morgan-1)**: I use this to share any CAD models I make (I often find myself cornered into making a model of a common-off-the-shelf item), and a few purely-mechanical open-source hardware designs.

A few of my personal favorite projects (of the ones I'm allowed to share...) are linked below.