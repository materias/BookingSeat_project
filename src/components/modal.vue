<template>
  <div>
    <div class="modal">
      <div class="modal-frame">
        <header class="modal-header">
          <slot name="header">
            Thank You {{ name }}
            <p class="subheader">Your reservation has been confirmed.</p>
            <p class="order-number">9490532635353</p>
            <p class="order-label">Reservation number</p>
            <span class="h-line"></span>
            <div class="details">
              <div class="details-date">Wed. 1/18/2020 <br> Date </div>
              <div class="v-line"></div>
              <div class="details-date">13:00 PM <br> Time</div>
              <div class="v-line"></div>
              <div class="details-date">{{ordered}} People <br> Party Size</div>
            </div>
            <button type="button" class="btn-calendar">ADD TO CALENDAR</button>
            <p class="order-confirm">Your reservation request confirmation was sent at 07:26 AM to <br> {{ email }}. Questions? Call us at +972-54-567-109</p>
          </slot>
        </header>
        <div>
            
              <button type="button" class="btn-close" @click="close">
                Tap to close
              </button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { bus } from '../main';
  export default {
    data() {
      return {
        ordered: '',
        name: '',
        email: '',
      }
    },
    name: 'modal',

    methods: {
      close() {
        this.$emit('close');
        this.$emit('reset');
      },
    },

    created() {
      bus.$on('total', (data) => {
        this.ordered = data;
      }),
      bus.$on('firstname', (data) => {
        this.name = data;
      }),
      bus.$on('email', (data) => {
        this.email = data;
      })
    }
  };
</script>

<style scoped>
  .modal {
    background-color: #000000;
    width: 500px;
    height: 550px;
    color: #ffffff;
    box-shadow: 2px 2px 20px 2000px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 31%;
    z-index: 2000;
  }

  .modal-frame {
    width: 85%;
    height: 90%;
    text-align: center;
    /* position: absolute; */
    /* top: 0;
    left: 0;
    bottom: 0;
    right: 0; */
    /* margin: auto; */
    border: 2px solid rgba(255, 255, 255, 0.5);
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    display: block;
    color: rgba(255, 255, 255, 0.8);
    font-weight: bold;
    font-size: 28px;
    justify-content: center;
    padding-top: 100px;
    border-bottom: none;
  }

  .modal-footer {
    justify-content: flex-end;
  }

  .modal-body {
    padding: 20px 10px;
  }

  .btn-close {
    color:rgba(255, 255, 255, 0.8);
    font-weight: bold;
    font-size: 14px;
    background-color: #000000;
    cursor: pointer;
    position: absolute;
    bottom: 18px;
    left: 350px;
    box-shadow: none;
    outline: 0 none !important;
    border: none;
  }

  .subheader {
    font-size: 16px;
    margin-top: 15px;
    font-weight: normal;
  }

  .order-number {
    margin-top: 30px;
    font-size: 12px;
  }

  .order-label {
    font-size: 12px;
    font-weight: normal;
    margin-top: -10px;
  }

  .h-line {
    display: block;
    background-color: rgba(255, 255, 255, 0.3);
    width: 370px;
    height: 2px;
    margin: auto;
  }

  .details {
    display: grid;
    grid-template-columns: 1fr 20px 1fr 20px 1fr;
    width: 350px;
    margin: auto;
  }

  .v-line {
    display: block;
    background-color: rgba(255, 255, 255, 0.3);
    width: 2px;
    height: 30px;
    margin: auto;
  }

  .details-date {
    display: block;
    font-size: 12px;
    justify-items: center;
    align-items: center;
    margin-top: 10px;
  }

  .btn-calendar {
    margin-top: 40px;
    width: 180px;
    height: 30px;
    font-size: 14px;
    background-color: #2e8dcc;
    border: 1px solid #2e8dcc;
    outline: none;
    cursor: pointer;
  }

  .order-confirm {
    font-size: 12px;
    font-weight: normal;
    margin-top: 50px;
  }
</style>