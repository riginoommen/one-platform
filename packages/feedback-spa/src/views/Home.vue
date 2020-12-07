<template>
<div>
  <div class="home pf-u-mt-4xl" v-if="!loading">
    <div class="pf-l-grid pf-m-gutter">
      <div class="pf-l-grid__item pf-m-4-col" v-for="(stat, index) in feedbackStats" v-bind:key="stat.id">
        <div class="pf-c-card click-card" id="card-action" v-on:click="setCategory(stat.title, index)" v-bind:class="{ 'active':index === selectedCategoryIndex }">
          <div class="pf-c-card__header">
            <i v-bind:class="stat.icon"></i>
            <div class="pf-c-card__actions">
              <div class="count">
                {{ stat.count }}
              </div>
            </div>
          </div>
          <div class="pf-c-card__body" id="card-action-check-label">
            <p>{{ stat.title }}</p>
            <div class="pf-c-progress pf-m-sm" id="progress-sm-example">
              <div class="pf-c-progress__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
                aria-valuenow="100" aria-describedby="progress-sm-example-description">
                <div class="pf-c-progress__indicator" style="width:100%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="status-tabs pf-u-mt-xl">
      <div class="status-box">
        Open
        <span class="badge op-badge op-open">
          10
        </span>
      </div>
      <div class="status-box">
        Open
        <span class="badge op-badge op-open">
          10
        </span>
      </div>
    </div>

    <div class="pf-u-mt-xl">
      <span v-for="feedback in allFeedback" v-bind:key="feedback._id">
      <ListFeedback :feedback="feedback"/>
    </span>
    </div>

  </div>

<!-- Loader -->
  <div class="pf-u-text-align-center" v-if="loading">
    <span class="pf-c-spinner" role="progressbar" aria-valuetext="Loading...">
        <span class="pf-c-spinner__clipper"></span>
        <span class="pf-c-spinner__lead-ball"></span>
        <span class="pf-c-spinner__tail-ball"></span>
    </span>
  </div>
</div>
</template>

<script>
import { ListFeedbacks } from '../graphql/gqlQueries'
import ListFeedback from '@/components/ListFeedback.vue'

export default {
  name: 'Feedback',
  components: {
    ListFeedback
  },
  data () {
    return {
      allFeedback: [],
      feedbackStats: [],
      loading: true,
      activeCategory: null,
      selectedCategoryIndex: null
    }
  },
  async created () {
    this.allFeedback = await this.$apollo.query({
      query: ListFeedbacks
    }).then(response => {
      this.loading = response.loading
      return response.data.listFeedbacks
    })
    this.feedbackStats = [
      {
        id: 1,
        count: this.allFeedback.length,
        title: 'All',
        icon: 'fas fa-th-list'
      },
      {
        id: 2,
        count: (this.allFeedback.filter(feedback => feedback.category === 'FEEDBACK')).length,
        title: 'Feedback',
        icon: 'fas fa-comment-alt'
      },
      {
        id: 3,
        count: (this.allFeedback.filter(feedback => feedback.category === 'BUG')).length,
        title: 'Bug',
        icon: 'fas fa-bug'
      }
    ]
  },
  methods: {
    setCategory: function (title, index) {
      this.selectedCategoryIndex = index
      if (title === 'Feedback') {
        this.activeCategory = 'FEEDBACK'
      } else if (title === 'Bug') {
        this.activeCategory = 'BUG'
      } else {
        this.activeCategory = null
      }
    }
  }
}
</script>

<style scoped>
.count {
  color: rgb(33, 155, 224);
  font-weight: 100;
  font-size: 35px;
  }

.status-tabs {
  display: flex;
  }

.status-box {
  padding: 0.4rem 1rem;
  border: 0.5px solid #e1e0e061;
  cursor: pointer;
  transition: all 120ms ease-in-out;
  }

.op-badge.op-open {
  color: green;
  border: 1px solid green;
  border-radius: 1px;
  }

.op-badge.op-close {
  color: #6c757d;
  border: 1px solid rgba(108, 117, 125, 0.75);
  border-radius: 1px;
  }

.click-card {
  cursor: pointer;
  transition: all 320ms ease-in-out;
}
.click-card:hover {
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  }

.active {
  background: rgba(22, 112, 230, 0.1);
  border: 1px solid rgba(22, 112, 230, 0.3);
  border-radius: 5px;
  }
</style>
