import { Button } from '@/components/Button';
import { Modal } from '../types';
import * as S from './style';
import { TextInput } from '@/components/Input/TextInput';
import { useForm } from 'react-hook-form';
import { Inputs } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import registerPersonSchema from './validationSchema';
import { NumberIput } from '@/components/Input/NumberInput';

export const AddPersonModal = ({ closeModal, actionText, title }: Modal) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({ resolver: zodResolver(registerPersonSchema) });

  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <TextInput
              label="Nome"
              name="name"
              errors={errors}
              register={register}
              placeholder="Digite o nome da pessoa..."
            />
            <TextInput
              label="E-mail"
              name="email"
              errors={errors}
              register={register}
              placeholder="Digite o e-mail da pessoa..."
            />
            <TextInput
              label="Avatar (URL de uma imagem)"
              name="avatar"
              errors={errors}
              register={register}
              placeholder="Digite a URL do avatar da pessoa..."
            />
            <NumberIput
              label="Idade"
              name="age"
              errors={errors}
              register={register}
              placeholder="Digite a idade da pessoa..."
            />
          </S.InputContainer>
          <S.ButtonsContainer>
            <Button onClick={closeModal}>CANCELAR</Button>
            <Button>{actionText}</Button>
          </S.ButtonsContainer>
        </S.Form>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};