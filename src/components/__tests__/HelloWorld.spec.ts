import HomeView from '@/views/HomeView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useCounterStore } from '@/stores/counter'
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'

describe('HomeView', () => {
  it('renders properly and increments counter', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [createTestingPinia({ 
          createSpy: vi.fn, 
          initialState: { counter: { count: 0 } },
          stubActions: false // Add this line
        })],
      },
    })

    const counterStore = useCounterStore()
    console.log('Initial count:', counterStore.count)
    expect(wrapper.text()).toContain('Counter：0')

    await wrapper.find('button').trigger('click')
    console.log('Count after click:', counterStore.count)
    expect(counterStore.count).toBe(1)
    expect(wrapper.text()).toContain('Counter：1')
  })
})