import Lance from '@/components/Lance'
import { mount } from '@vue/test-utils'
test('Não aceita lance com valor menor do que 0', () => {
    //expect(true).toBe(true) - usado para testar se a função está sendo chamada

    //Monta um componente e testa se funcionou
    const wrapper = mount(Lance)

    const input = wrapper.find('input')

    input.setValue(-100)

    expect(input).toBeTruthy()
})