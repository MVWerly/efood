import { useState } from 'react'

import * as S from './styles'

type Props = {
  startPaying: () => void
  paymentFinalized: () => void
}

const Checkout = ({ startPaying, paymentFinalized }: Props) => {
  const [payment, setPayment] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const purchaseCompleted = () => {
    setIsSuccess(false)
    setPayment(false)
    paymentFinalized()
  }

  return (
    <>
      {!payment ? (
        <>
          <div>
            <S.Title>Entrega</S.Title>
            <S.InputGroup>
              <label>Quem irá receber</label>
              <input type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label>Endereço</label>
              <input type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label>Cidade</label>
              <input type="text" />
            </S.InputGroup>
            <S.Row $column="155px 155px">
              <S.InputGroup>
                <label>CEP</label>
                <input type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <label>Número</label>
                <input type="text" />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup>
              <label>Complemento (opcional)</label>
              <input type="text" />
            </S.InputGroup>
            <S.Row className="margin-top">
              <S.Button type="button" onClick={() => setPayment(true)}>
                Continuar com o pagamento
              </S.Button>
            </S.Row>
            <S.Row>
              <S.Button type="button" onClick={startPaying}>
                Voltar para o carrinho
              </S.Button>
            </S.Row>
          </div>
        </>
      ) : (
        <>
          {!isSuccess ? (
            <>
              <div>
                <S.Title>Pagamento - Valor a pagar R$ 199,90</S.Title>
                <S.InputGroup>
                  <label>Nome do cartão</label>
                  <input type="text" />
                </S.InputGroup>
                <S.Row $column="228px 87px">
                  <S.InputGroup>
                    <label>Número do cartão</label>
                    <input type="text" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label>CVV</label>
                    <input type="text" />
                  </S.InputGroup>
                </S.Row>
                <S.Row $column="155px 155px">
                  <S.InputGroup>
                    <label>Mês de vencimento</label>
                    <input type="text" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label>Ano de vencimento</label>
                    <input type="text" />
                  </S.InputGroup>
                </S.Row>
                <S.Row className="margin-top">
                  <S.Button type="button" onClick={() => setIsSuccess(true)}>
                    Finalizar pagamento
                  </S.Button>
                </S.Row>
                <S.Row>
                  <S.Button type="button" onClick={() => setPayment(false)}>
                    Voltar para a edição de endereço
                  </S.Button>
                </S.Row>
              </div>
            </>
          ) : (
            <>
              <div>
                <S.Title>Pedido realizado - #Pedido</S.Title>
                <S.Row>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                </S.Row>
                <S.Row>
                  <S.Button onClick={purchaseCompleted}>Concluir</S.Button>
                </S.Row>
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Checkout
