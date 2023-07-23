<template>
    <div>
        <v-dialog v-model="genderDialog" max-width="500">
            <v-card id="card">
                <v-row>
                    <v-col class=" d-flex justify-end mr-3 pt-6">
                        <v-icon color="primary" @click="close">
                            mdi-close
                        </v-icon>
                    </v-col>
                </v-row>
                <v-card-title>
                    <v-row>
                        <v-col class=" d-flex justify-center" no-gutters>
                            <span class="text-h5">ກ່ຽວກັບທ່ານ</span>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-col class=" d-flex justify-center" no-gutters>
                    <span class="text-caption mb-2">ໃຫ້ຂໍ້ມູນທ່ານຕໍ່ພວກເຮົາເພື່ອການແນະນຳເນື້ອຫາທີ່ເໝາະສົມສຳລັບທ່ານ</span>
                </v-col>
                <v-col class=" d-flex justify-center" no-gutters>
                    <span class="text-h6 ">ເພດ</span>
                </v-col>
                <v-row align="center">
                    <v-col>
                        <div v-for="(option, index) in genderOptions" :key="index" class="text-center">
                            <div class="my-4">
                                <v-btn rounded color="primary" :outlined="selectedGender !== option"
                                    @click="selectGender(option)">
                                    {{ option }}
                                </v-btn>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            genderDialog: true,
            selectedGender: null,
            genderOptions: ["Female", "Male", "LQBTQ+"],
        };
    },
    methods: {
        selectGender(option) {
            this.selectedGender = option;
            console.log('Selected gender:', this.selectedGender);
            this.genderDialog = false
        },
        close() {
            this.genderDialog = false
        },
    },
};
</script>
  
<style scoped>
#card {
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>