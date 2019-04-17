<template>
  <v-container fluid grid-list-md>
    <v-card>
      <v-card-text>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-layout row wrap>
            <v-flex sm6 lg6>
              <v-menu
                class="pr-2"
                ref="statDate"
                lazy
                :close-on-content-click="false"
                v-model="startDateMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-22"
                max-width="290px"
                :return-value.sync="startDate"
              >
                <v-text-field
                  slot="activator"
                  label="Start Date"
                  v-model="startDate"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="startDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="startDateMenu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.statDate.save(startDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex sm6 lg6>
              <v-menu
                ref="startTime"
                lazy
                :close-on-content-click="false"
                v-model="startTimeMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-24"
                max-width="290px"
                :return-value.sync="startTime"
              >
                <v-text-field
                  slot="activator"
                  label="Start Time"
                  v-model="startTime"
                  append-icon="access_time"
                  readonly
                ></v-text-field>
                <v-time-picker v-model="startTime">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="startTimeMenu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.startTime.save(startTime)">OK</v-btn>
                </v-time-picker>
              </v-menu>
            </v-flex>
            <v-flex sm6 lg6>
              <v-menu
                ref="endDate"
                lazy
                class="pr-2"
                :close-on-content-click="false"
                v-model="endDateMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-22"
                min-width="290px"
                :return-value.sync="endDate"
              >
                <v-text-field
                  slot="activator"
                  label="End Date"
                  v-model="endDate"
                  append-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="endDate" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="endDateMenu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.endDate.save(endDate)">OK</v-btn>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-flex sm6 lg6>
              <v-menu
                ref="endTime"
                lazy
                :close-on-content-click="false"
                v-model="endTimeMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-24"
                max-width="290px"
                :return-value.sync="endTime"
              >
                <v-text-field
                  slot="activator"
                  label="End Time"
                  v-model="endTime"
                  append-icon="access_time"
                  readonly
                ></v-text-field>
                <v-time-picker v-model="endTime">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="endTimeMenu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.endTime.save(endTime)">OK</v-btn>
                </v-time-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card-text>
    </v-card>

    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Lorem</v-card-title>
          <v-card-text>{{ lorem }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex v-for="n in 2" :key="n" d-flex xs12>
                <v-card color="red lighten-2" dark>
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({
    title: null,
    valid: true,
    date: null,
    startDateMenu: false,
    startDate: null,
    startTimeMenu: false,
    startTime: null,
    endDateMenu: false,
    endDate: null,
    endTimeMenu: false,
    endTime: null,
    modal: false,
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
  })
};
</script>
