import { shallowMount } from '@vue/test-utils'
import ListFeedback from '@/components/ListFeedback.vue'

describe('ListFeedback.vue', () => {
  it('renders props.msg when passed', () => {
    const input = { _id: '5ffc6d4a4551527451c6db16', summary: 'hoho Testing the Feedback in demo', module: 'Mod APP', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", experience: 'Good', ticketUrl: 'https://github.com/Integration-Git/git/issues/208', state: 'OPEN', source: 'GITHUB', category: 'FEEDBACK', assignee: { name: null, email: null, url: null, __typename: 'FeedbackUserProfileType' }, createdBy: { name: 'Rigin Oommen', uid: 'roommen', __typename: 'FeedbackUserProfileType' }, updatedBy: null, createdOn: '2021-01-11T15:22:50.426Z', updatedOn: '2021-01-11T15:22:50.426Z', __typename: 'FeedbackType' }
    const wrapper = shallowMount(ListFeedback, {
      feedback: input
    })
    expect(wrapper.text()).toMatch(input)
  })
})
