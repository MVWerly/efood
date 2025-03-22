import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { close } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

type Props = {
  backToCart: () => void
  paymentFinalized: () => void
}

const Checkout = ({ backToCart, paymentFinalized }: Props) => {
  const dispatch = useDispatch()

  const [purchase] = usePurchaseMutation()

  const [goToPayment, setGoToPayment] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      addressComplement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      // Delivery data
      receiver: Yup.string()
        .min(5, 'O nome precisa de pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().min(4).required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O campo deve ter 8 caracteres')
        .max(8, 'O campo deve ter 8 caracteres')
        .required('O campo é obrigatório'),
      addressNumber: Yup.string().required('O campo é obrigatório'),
      addressComplement: Yup.string(),
      // Payment details
      cardDisplayName: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('O campo é obrigatório') : schema
      ),
      expireMonth: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('O campo é obrigatório') : schema
      ),
      expireYear: Yup.string().when((values, schema) =>
        goToPayment ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        products: [
          {
            id: 0,
            preco: 29
          }
        ],
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            number: Number(values.addressNumber),
            zipCode: values.zipCode,
            complement: values.addressComplement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: 12,
              year: 12
            }
          }
        }
      })
    }
  })

  const purchaseCompleted = () => {
    // setIsSuccess(false)
    setGoToPayment(false)
    paymentFinalized()
    dispatch(close())
  }

  const submitPaymentDetails = () => {
    form.handleSubmit()
    setIsSuccess(true)
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <S.Container $isActive={!goToPayment}>
          <S.Title>Entrega</S.Title>
          <S.InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              className={checkInputHasError('receiver') ? 'error' : ''}
              type="text"
              id="receiver"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="address">Endereço</label>
            <input
              className={checkInputHasError('address') ? 'error' : ''}
              type="text"
              id="address"
              name="address"
              value={form.values.address}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              className={checkInputHasError('city') ? 'error' : ''}
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.Row $column="155px 155px">
            <S.InputGroup>
              <label htmlFor="zipCode">CEP</label>
              <input
                className={checkInputHasError('zipCode') ? 'error' : ''}
                type="text"
                id="zipCode"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="addressNumber">Número</label>
              <input
                className={checkInputHasError('addressNumber') ? 'error' : ''}
                type="text"
                id="addressNumber"
                name="addressNumber"
                value={form.values.addressNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
          </S.Row>
          <S.InputGroup>
            <label htmlFor="addressComplement">Complemento (opcional)</label>
            <input
              className={checkInputHasError('addressComplement') ? 'error' : ''}
              type="text"
              id="addressComplement"
              name="addressComplement"
              value={form.values.addressComplement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.Row className="margin-top">
            <S.Button
              title="Clique aqui para continuar com o pagamento"
              type="button"
              onClick={() => setGoToPayment(true)}
            >
              Continuar com o pagamento
            </S.Button>
          </S.Row>
          <S.Row>
            <S.Button
              title="Clique aqui para voltar ao carrinho"
              type="button"
              onClick={backToCart}
            >
              Voltar para o carrinho
            </S.Button>
          </S.Row>
        </S.Container>
        <S.Container $isActive={goToPayment && !isSuccess}>
          <S.Title>Pagamento - Valor a pagar R$ 199,90</S.Title>
          <S.InputGroup>
            <label htmlFor="cardDisplayName">Nome do cartão</label>
            <input
              className={checkInputHasError('cardDisplayName') ? 'error' : ''}
              type="text"
              id="cardDisplayName"
              name="cardDisplayName"
              value={form.values.cardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </S.InputGroup>
          <S.Row $column="228px 87px">
            <S.InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                className={checkInputHasError('cardNumber') ? 'error' : ''}
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <input
                className={checkInputHasError('cardCode') ? 'error' : ''}
                type="text"
                id="cardCode"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row $column="155px 155px">
            <S.InputGroup>
              <label htmlFor="expireMonth">Mês de vencimento</label>
              <input
                className={checkInputHasError('expireMonth') ? 'error' : ''}
                type="text"
                id="expireMonth"
                name="expireMonth"
                value={form.values.expireMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="expireYear">Ano de vencimento</label>
              <input
                className={checkInputHasError('expireYear') ? 'error' : ''}
                type="text"
                id="expireYear"
                name="expireYear"
                value={form.values.expireYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
          </S.Row>
          <S.Row className="margin-top">
            <S.Button
              title="Clique aqui para finalizar o pagamento"
              type="submit"
              onClick={submitPaymentDetails}
            >
              Finalizar pagamento
            </S.Button>
          </S.Row>
          <S.Row>
            <S.Button
              title="Clique aqui para voltar e editar o endereço"
              type="button"
              onClick={() => setGoToPayment(false)}
            >
              Voltar para a edição de endereço
            </S.Button>
          </S.Row>
        </S.Container>
      </form>
      <S.Container $isActive={isSuccess}>
        <S.Title>Pedido realizado - #Pedido</S.Title>
        <S.Row>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </S.Row>
        <S.Row>
          <S.Button
            title="Clique aqui para voltar ao menu"
            type="button"
            onClick={purchaseCompleted}
          >
            Concluir
          </S.Button>
        </S.Row>
      </S.Container>
    </>
  )
}

export default Checkout
