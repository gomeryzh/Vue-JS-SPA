<template>
    <div>
        <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" :value="firstName" @input="nameChanged(true, $event)">
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" :value="lastName" @input="nameChanged(false, $event)">
                    </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        computed: {
            firstName() {
                return this.value.split(" ")[0];
            },
            lastName() {
                return this.value.split(" ")[1];
            }
        },
        methods: {
            nameChanged(firstName, event) {
                let name = '';
                if(firstName) {
                    name = event.target.value + ' ' + this.lastName;
                } else {
                    name = this.firstName + ' '+ event.target.value;
                }

                this.value = name;
                this.$emit('input', this.value);
            }
        },
    }
</script>

<style scoped>

</style>