import Avaliador from '@/views/Avaliador'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { getLeiloes } from '@/http'
import flushPromises from 'flush-promises'


jest.mock('@/http')

const leiloes = [
    {
        produto: 'Livro da casa do código',
        lanceInicial: 50,
        descricao: 'Um livro excelente de REACT'
    },
    {
        produto: 'Livro da casa do código',
        lanceInicial: 50,
        descricao: 'Um livro excelente de ANGULAR'
    },
]

describe('Um avaliador que se conecta com a API', () => {
    test('mostra todos os leilões retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce(leiloes)
        const wrapper = mount(Avaliador, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        await flushPromises()

        const totalLeiloesExibidos = wrapper.findAll('.leilao').length
        expect(totalLeiloesExibidos).toBe(leiloes.length)
    })
    test('não há leilões retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce([])
        const wrapper = mount(Avaliador, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        await flushPromises()

        const totalLeiloesExibidos = wrapper.findAll('.leilao').length
        expect(totalLeiloesExibidos).toBe(0)
    })
})