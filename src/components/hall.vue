<template>
<div class="container">
      <div></div>
    <div class="hall">
        <div class="hall-stage">
            <h2>STAGE</h2>
        </div>
        <div class="hall-container">
            <div class="hall-block">
                <div class="hall-exit">
                    <h3>← exit</h3>
                    <h3>exit →</h3>
                </div>
                <div class="seats">
                    <div class="seats-vip-left">
                        <div v-for="(line, i) in seatsVIPleft" 
                        :key="`A-${i}`" 
                        class="seats-line">
                            {{line.line}}
                            <div v-for="(seat, i) in line" 
                            :key="`B-${i}`" 
                            class="seat" 
                            @click="selectSeat(seat)" 
                            :class="returnSeatColor(seat)">
                                {{seat.seat}}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div v-for="(line, i) in seats" 
                        :key="`C-${i}`" 
                        class="seats-line">
                            <span>{{line[0].line}}</span>
                                <div v-for="(seat, i) in line" 
                                :key="`D-${i}`" class="seat" 
                                @click="selectSeat(seat)" 
                                :class="returnSeatColor(seat)">
                                     {{seat.seat}}
                                </div>
                            <span>{{line[0].line}}</span>
                        </div>
                    </div>

                    <div class="seats-vip-right">
                        <div v-for="(line, i) in seatsVIPright" 
                        :key="`E-${i}`" 
                        class="seats-line">
                            {{line.line}}
                                <div v-for="(seat, i) in line" 
                                :key="`F-${i}`" 
                                class="seat" 
                                @click="selectSeat(seat)" 
                                :class="returnSeatColor(seat)">
                                    {{seat.seat}}
                                </div>
                        </div>
                    </div>
            </div>
       
        <button @click="cancelSelected()" class="btn-cancel">Cancel</button>
        <button @click="reserveSeats()" class="btn-confirm">Confirm</button>

        </div>
        </div>   
    </div>
  
    <div>
        <div v-if="selectedSeats.length" class="order">
            <span id="order__label">Your order:</span>
            <p v-for="ticket in selectedSeats" :key="ticket.index">
                Line: {{ticket.line}} Seat: {{ticket.seat}}
            </p>
            <span id="order__total">Total:</span> {{selectedSeats.length}}
        </div>
    </div>
</div>


</template>

<script>
import { bus } from '../main';
export default {
    name: 'hall',
    props: {

    },
    data() {
        return {
            seats: [
                [
                    {line: 'AA', seat: 109, isFree: true, isVIP: false},
                    {line: 'AA', seat: 108, isFree: true, isVIP: false},
                    {line: 'AA', seat: 107, isFree: true, isVIP: false},
                    {line: 'AA', seat: 106, isFree: true, isVIP: false},
                    {line: 'AA', seat: 105, isFree: true, isVIP: false},
                    {line: 'AA', seat: 104, isFree: true, isVIP: false},
                    {line: 'AA', seat: 103, isFree: true, isVIP: false},
                    {line: 'AA', seat: 102, isFree: true, isVIP: false},
                    {line: 'AA', seat: 101, isFree: true, isVIP: false},
                ],
                [
                    {line: 'BB', seat: 109, isFree: true, isVIP: false},
                    {line: 'BB', seat: 108, isFree: true, isVIP: false},
                    {line: 'BB', seat: 107, isFree: true, isVIP: false},
                    {line: 'BB', seat: 106, isFree: true, isVIP: false},
                    {line: 'BB', seat: 105, isFree: true, isVIP: false},
                    {line: 'BB', seat: 104, isFree: true, isVIP: false},
                    {line: 'BB', seat: 103, isFree: true, isVIP: false},
                    {line: 'BB', seat: 102, isFree: true, isVIP: false},
                    {line: 'BB', seat: 101, isFree: true, isVIP: false},
                ],
                [
                    {line: 'A', seat: 109, isFree: true, isVIP: false},
                    {line: 'A', seat: 108, isFree: true, isVIP: false},
                    {line: 'A', seat: 107, isFree: true, isVIP: false},
                    {line: 'A', seat: 106, isFree: true, isVIP: false},
                    {line: 'A', seat: 105, isFree: true, isVIP: false},
                    {line: 'A', seat: 104, isFree: true, isVIP: false},
                    {line: 'A', seat: 103, isFree: true, isVIP: false},
                    {line: 'A', seat: 102, isFree: true, isVIP: false},
                    {line: 'A', seat: 101, isFree: true, isVIP: false},
                ],
                [
                    {line: 'B', seat: 109, isFree: true, isVIP: false},
                    {line: 'B', seat: 108, isFree: true, isVIP: false},
                    {line: 'B', seat: 107, isFree: true, isVIP: false},
                    {line: 'B', seat: 106, isFree: true, isVIP: false},
                    {line: 'B', seat: 105, isFree: true, isVIP: false},
                    {line: 'B', seat: 104, isFree: true, isVIP: false},
                    {line: 'B', seat: 103, isFree: true, isVIP: false},
                    {line: 'B', seat: 102, isFree: true, isVIP: false},
                    {line: 'B', seat: 101, isFree: true, isVIP: false},
                ],
                [
                    {line: 'C', seat: 109, isFree: true, isVIP: false},
                    {line: 'C', seat: 108, isFree: true, isVIP: false},
                    {line: 'C', seat: 107, isFree: true, isVIP: false},
                    {line: 'C', seat: 106, isFree: true, isVIP: false},
                    {line: 'C', seat: 105, isFree: true, isVIP: false},
                    {line: 'C', seat: 104, isFree: true, isVIP: false},
                    {line: 'C', seat: 103, isFree: true, isVIP: false},
                    {line: 'C', seat: 102, isFree: true, isVIP: false},
                    {line: 'C', seat: 101, isFree: true, isVIP: false},
                ],
                [
                    {line: 'D', seat: 109, isFree: true, isVIP: false},
                    {line: 'D', seat: 108, isFree: true, isVIP: false},
                    {line: 'D', seat: 107, isFree: true, isVIP: false},
                    {line: 'D', seat: 106, isFree: true, isVIP: false},
                    {line: 'D', seat: 105, isFree: true, isVIP: false},
                    {line: 'D', seat: 104, isFree: true, isVIP: false},
                    {line: 'D', seat: 103, isFree: true, isVIP: false},
                    {line: 'D', seat: 102, isFree: true, isVIP: false},
                    {line: 'D', seat: 101, isFree: true, isVIP: false},
                ],
            ],
            seatsVIPleft: [
                [
                    {line: 'B', seat: 3, isFree: true, isVIP: true},
                    {line: 'B', seat: 1, isFree: true, isVIP: true},
                ],
                [
                    {line: 'C', seat: 5, isFree: true, isVIP: true},
                    {line: 'C', seat: 3, isFree: true, isVIP: true},
                    {line: 'C', seat: 1, isFree: true, isVIP: true},
                ],
                [
                    {line: 'D', seat: 5, isFree: true, isVIP: true},
                    {line: 'D', seat: 3, isFree: true, isVIP: true},
                    {line: 'D', seat: 1, isFree: true, isVIP: true},
                ],
            ],
            seatsVIPright: [
                [
                    {line: 'B', seat: 2, isFree: true, isVIP: true},
                    {line: 'B', seat: 4, isFree: true, isVIP: true},
                ],
                [
                    {line: 'C', seat: 2, isFree: true, isVIP: true},
                    {line: 'C', seat: 4, isFree: true, isVIP: true},
                    {line: 'C', seat: 6, isFree: true, isVIP: true},
                ],
                [
                    {line: 'D', seat: 2, isFree: true, isVIP: true},
                    {line: 'D', seat: 4, isFree: true, isVIP: true},
                    {line: 'D', seat: 6, isFree: true, isVIP: true},
                ],
            ],
            selectedSeats: [],
            isModalVisible: false
        }
    },
    methods: {
        selectSeat: function(seat) {
            if (!seat.isFree) return;
            if (this.selectedSeats.indexOf(seat) !== -1) {
                this.selectedSeats.splice(this.selectedSeats.indexOf(seat), 1);
            } else {
                this.selectedSeats.push(seat);
            }
        },

        returnSeatColor: function(seat) {
            if (this.selectedSeats.indexOf(seat) !== -1) {
                return 'seat-active';
            } else {
                return seat.isFree? 'seat-free' : 'seat-locked';
            }
        },

        reserveSeats: function() {
            for (let i = 0; i < this.seats.length; i++) {
                for (let s = 0; s < this.seats[i].length; s++) {
                    if (this.selectedSeats.indexOf(this.seats[i][s]) !== -1) {
                        this.seats[i][s].isFree = false;
                    }
                }
            }
            for (let i = 0; i < this.seatsVIPleft.length; i++) {
                for (let s = 0; s < this.seatsVIPleft[i].length; s++) {
                    if (this.selectedSeats.indexOf(this.seatsVIPleft[i][s]) !== -1) {
                        this.seatsVIPleft[i][s].isFree = false;
                    }
                }
            }
            for (let i = 0; i < this.seatsVIPright.length; i++) {
                for (let s = 0; s < this.seatsVIPright[i].length; s++) {
                    if (this.selectedSeats.indexOf(this.seatsVIPright[i][s]) !== -1) {
                        this.seatsVIPright[i][s].isFree = false;
                    }
                }
            }
            bus.$emit('total', this.selectedSeats.length);
            this.selectedSeats = [];  
            this.isModalVisible = true;
            bus.$emit('isModalVisible', this.isModalVisible);
        },

        cancelSelected: function() {
            this.selectedSeats = [];
        },
    },
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.hall {
  display: block;
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
}

.hall-container {
  display: flex;
}

.hall-stage {
  display: flex;
  background-color: rgba(110, 95, 8, 0.45);
  width: 627px;
  height: 30px;
  align-items: center;
  justify-items: center;
  position: relative;
  z-index: -100;
}

.hall-stage h2 {
  background-color: #fff;
  position: absolute;
  margin-top: 10px;
  margin-left: 255px;
  justify-content: center;
  padding: 0px 15px;
}

.hall-exit {
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
}

h3 {
  font-size: 16px;
}

.seats {
  display: flex;
  justify-content: space-between;
}

.seats-line {
  display: flex;
  justify-content: center;
  align-items: center;
}

.seats-line > span {
    margin-left: 10px;
    margin-right: 10px;
}

.seat {
  margin-right: 1px;
  height: 35px;
  width: 35px;
  background-size: 35px 35px;
  color: #fff;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.seats-vip-left, .seats-vip-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}

.seats-vip-right {
    align-items: flex-start;
  }

.seat-free {
    background-image: url(../assets/seat-free.svg);
}

.seat-active {
    background-image: url(../assets/seat-active.svg);
    color:rgba(110, 95, 8, 0.9)
}

.seat-locked {
    background-image: url(../assets/seat-locked.svg);
    color:rgba(110, 95, 8, 1.0)
}

.btn-confirm, .btn-cancel {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    justify-items: flex-end;
    width: 100px;
    height: 30px;
    box-shadow: 0 0 1 1 #000;
    border: none;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
    outline: none;
}

.btn-confirm {
    background-color: rgba(28, 44, 78, 0.7);
    color: #fff;
    margin-left: 5px;
}

.btn-confirm:hover, .btn-confirm:active {
    background-color: rgb(216, 114, 67);
    outline: none;
}

.btn-cancel {
    background-color: rgba(139, 138, 138, 0.3);
    color: #fff;
}

.order {
    display: block;
    font-size: 12px;
}

#order__label, #order__total {
    font-weight: bold;
}
</style>