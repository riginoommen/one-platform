<template>
  <div class="home pf-u-mt-4xl">
    <div class="pf-l-grid pf-m-gutter">
      <div class="pf-l-grid__item pf-m-4-col">
        <div class="pf-c-card" id="card-action">
          <div class="pf-c-card__header">
            <div class="pf-c-card__actions">
              <div class="count-number">
                10
              </div>
            </div>
          </div>
          <div class="pf-c-card__body" id="card-action-check-label">All
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
  </div>
</template>

<script>

export default {
  name: 'Feedback',
  data () {
    return {
      issueStats: []
    }
  }
}
</script>

<style scoped>
.count-number {
  color: #4285f4;
  font-weight: 100;
  font-size: 35px;
}
</style>
