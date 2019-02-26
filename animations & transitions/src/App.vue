<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <button class="btn btn-primary" @click="show = !show">Show/Hide Alert</button>
        <br>
        <br>
        <select class="form-control" v-model="animationType">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <hr>
        <transition :name="animationType" appear>
          <div class="alert alert-info" v-if="show">Some info text</div>
        </transition>
        <hr>
        <transition :name="animationType" type="animation" appear>
          <div class="alert alert-info" v-if="show">Some info text</div>
        </transition>
        <hr>
        <transition enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">Some info text</div>
        </transition>
        <hr>
        <transition :name="animationType" type="animation" appear mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Some info text</div>
          <div class="alert alert-warning" v-else key="warning">Some warning text</div>
        </transition>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <hr>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="enterCancalled"
          @before-leave="beforeLeave"
          @leave="Leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="LeaveCancalled"
          :css="false"
        >
          <div style="width: 300px; height: 100px; background-color: aqua" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      load: true,
      animationType: "slide",
      elementWidth: 100
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("Enter");
      let round = 1;
      const interval = setInterval(() => {
        let roundWidth = this.elementWidth + round * 10;
        el.style.width = roundWidth + "px";
        round += 1;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancalled(el) {
      console.log("enterCancalled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    Leave(el, done) {
      console.log("Leave");
      let round = 1;
      const interval = setInterval(() => {
        let roundWidth = this.elementWidth - round * 10;
        el.style.width = roundWidth + "px";
        round += 1;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    LeaveCancalled(el) {
      console.log("LeaveCancalled");
    }
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
