<template>
  <div class="container">
      <h3>EVENT REGISTRATION FORM</h3>
        <div class="form-container w-50 mx-auto">
        <b-form id="signup-form" @submit.prevent="onSubmit">
        <b-container fluid>
        <b-row class="my-1">
        <b-col sm="2" class="input-name input-label">
            <label for="input-name">Name</label>
        </b-col>
        <b-col sm="5">
            <b-input v-model.trim="form.firstname" 
                    :class="{'is-invalid': $v.form.lastname.$error}" 
                    class="input" 
                    id="input-name"
                    type="text" 
                    pattern="^[a-zA-Z]+$" 
                    oninvalid="setCustomValidity('Please match the requested format')"  
                    onchange="try{setCustomValidity('')}catch(e){}" 
                    aria-describedby="firstname-help-block"
            >
            </b-input>
            <b-form-text v-if="!$v.form.firstname.$error" align="left" id="firstname-help-block">
                First Name
            </b-form-text>
            <div v-if="$v.form.firstname.$dirty || $v.form.firstname.required" class="invalid-feedback" align="left">
                This field is required.
            </div>
        </b-col>
        <b-col sm="5" >
            <b-form-input v-model.trim="$v.form.lastname.$model" 
                    :class="{'is-invalid': $v.form.lastname.$error}" 
                    class="input"
                    id="input-lastname"
                    type="text" 
                    pattern="^[a-zA-Z]+$" 
                    oninvalid="setCustomValidity('Please match the requested format')"  
                    onchange="try{setCustomValidity('')}catch(e){}" 
                    aria-describedby="lastname-help-block"
            >
            </b-form-input>
            <b-form-text v-if="!$v.form.lastname.$error" align="left" id="lastname-help-block">
                Last Name
            </b-form-text>
            <div v-if="$v.form.lastname.$dirty || $v.form.lastname.required" class="invalid-feedback" align="left">
                This field is required.
            </div>
        </b-col>
        </b-row>
            
        <b-row class="my-1">
        <b-col sm="2" class="input-label">
            <label for="input-company">Company</label>
        </b-col>
        <b-col sm="10">
            <b-form-input v-model.trim="$v.form.company.$model" 
                    :class="{'is-invalid': $v.form.company.$error}" 
                    class="input" id="input-company" 
                    type="text"
                    oninvalid="setCustomValidity('Please match the requested format')"  
                    onchange="try{setCustomValidity('')}catch(e){}" 
            >
            </b-form-input>
            <div v-if="$v.form.company.$dirty || $v.form.company.required" class="invalid-feedback" align="left">
                This field is required.
            </div>
        </b-col>
        </b-row>

        <b-row class="my-1">
        <b-col sm="2" class="input-label">
            <label for="input-email">Email</label>
        </b-col>
        <b-col sm="10">
            <b-form-input v-model.trim="$v.form.email.$model" 
                    :class="{'is-invalid': $v.form.email.$error}" 
                    class="input" 
                    id="input-email" 
                    type="email" 
                    oninvalid="setCustomValidity('Please match the requested format')"  
                    onchange="try{setCustomValidity('')}catch(e){}"
                    placeholder="example@email.com"
            >
            </b-form-input>
            <div v-if="$v.form.email.$dirty || $v.form.email.required" class="invalid-feedback" align="left">
                This field is required.
            </div>
        </b-col>
        </b-row>

        <b-row class="my-1">
        <b-col sm="2" class="input-label">
            <label for="input-phone">Phone</label>
        </b-col>
        <b-col sm="2" >
            <b-input v-model.trim="$v.form.phonecode.$model" 
                    :class="{'is-invalid': $v.form.phonecode.$error}" 
                    class="input" 
                    id="input-phonecode" 
                    type="text" 
                    pattern="[\+0-9]{2,3}$" 
                    aria-describedby="phonecode-help-block"
            >
            </b-input>
            <b-form-text v-if="!$v.form.phonecode.$dirty || !$v.form.phonecode.required" align="left" id="phonecode-help-block">
                Area Code
            </b-form-text>
            <div v-if="$v.form.phonecode.$dirty || $v.form.phonecode.required" class="invalid-feedback" align="left">This field is required.</div>
        </b-col>
        <b-col sm="8" >
            <b-input v-model.trim="$v.form.phonenumber.$model" 
                    :class="{'is-invalid': $v.form.phonenumber.$error}" 
                    class="input" 
                    id="input-phonenumber" 
                    type="text" 
                    pattern="[0-9]{1,10}$" 
                    aria-describedby="phonenumber-help-block"
            >
            </b-input>
            <b-form-text v-if="!$v.form.phonenumber.$dirty || !$v.form.phonenumber.required" align="left" id="phonenumber-help-block">
                Phone Number
            </b-form-text>
            <div v-if="$v.form.phonenumber.$dirty || $v.form.phonenumber.required" class="invalid-feedback" align="left">This field is required.</div>
        </b-col>
        </b-row>

        <b-row class="my-1">
        <b-col sm="2" class="input-label">
            <label for="input-phone">Subject</label>
        </b-col>
        <b-col>
        <b-form-select v-model="$v.form.subject.$model" 
                    :class="{'is-invalid': $v.form.subject.$error}" 
                    :options="options" class="input"
        >
        </b-form-select>
        <div v-if="$v.form.subject.$dirty || $v.form.subject.required" class="invalid-feedback" align="left">This field is required.</div>
        </b-col>
        </b-row>

        <b-row class="my-1">
        <b-col sm="7" class="input-label">
        <label>Are you an existing customer?</label>
        </b-col>
        <b-col sm="7" class="input-inline">
            <b-form-radio v-model="form.existing" name="some-radios" value="yes">Yes</b-form-radio>
            <b-form-radio v-model="form.existing" class="input-radio" name="some-radios" value="no">No</b-form-radio>
        </b-col>
        </b-row>
        <b-button type="submit" class="btn" variant="danger">REGISTER</b-button>
        </b-container>
        </b-form>
        </div>
    </div>
  
</template>

<script>
import { bus } from '../main';
import { required } from 'vuelidate/lib/validators';
export default {
name: 'registration',
data() {
    return {
        form: {
            firstname: '',
            lastname: '',
            company: '',
            email: '',
            phonecode: '',
            phonenumber: '',
            subject: '',
            existing: '',
        },
        options: [
                { value: '', text: 'Choose Option' },
                { value: 'Marketing', text: 'Marketing' },
                { value: 'Sales', text: 'Sales' },
        ],
        submitted: false,
        output: []
    }
},
validations: {
    form: {
        firstname: {required},
        lastname: {required},
        company: {required},
        email: {required},
        phonecode: {required},
        phonenumber: {required},
        subject: {required},
        existing: {required}
    }
},
methods: {
    resetData() {
        this.form.firstname = '',
        this.form.lastname = '',
        this.form.company = '',
        this.form.email = '',
        this.form.phonecode = '',
        this.form.phonenumber = '',
        this.form.subject = 0,
        this.form.existing = 'A'
    },
    onSubmit(e) {
        e.preventDefault();
        this.$v.form.$touch();
        this.submitted = true;
        // this.$axios.post('http://localhost:8082', {
        //     firstname: this.firstname,
        //     lastname: this.lastname,
        //     company: this.company,
        //     email: this.email,
        //     phonecode: this.phonecode,
        //     phonenumber: this.phonenumber,
        //     subject: this.subject,
        //     existing: this.existing,
        // })
        // .then(response => {
        //     this.output = response.data;
        // })
        // .catch(error => {
        //     this.output = error;
        // });
        bus.$emit('firstname', this.form.firstname);
        bus.$emit('email', this.form.email);
        bus.$emit('submitted', this.submitted);
    },
    }
}
</script>

<style scoped>

h3 {
    width: 75%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 60px;
    background-color: #000000;
    color: #ffffff;
    font-size: 20px;
}

.input-inline {
    display: flex;
}

.input-tips {
    display: flex;
    justify-items: flex-start;
    margin-left: 105px;
}

.input-label {
    display: flex;
    text-align: left;
    padding-top: 6px;
    font-weight: bold;
}

.my-1 {
    padding-top: 25px;
}

small {
    color: rgba(160, 158, 158, 0.9);
    margin-bottom: -10px;
}
#last {
    margin-left: 180px;
}
#number {
    margin-left: 35px;
}

.input-radio {
    margin-left: 50px;
}

.input {
    background-color: rgba(160, 158, 158, 0.15);
    border: none;
}
.btn {
    display: flex;
    justify-items: flex-start;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 50px;
    width: 150px;
}
</style>