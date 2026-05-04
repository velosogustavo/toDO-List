import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckBox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text"
import TrashIcon from "../assets/icons/Trash.svg?react"
import PlusIcon from "../assets/icons/Plus.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import PencilIcon from "../assets/icons/Pencil.svg?react"
import XIcon from "../assets/icons/Trash.svg?react"
import CheckIcon from "../assets/icons/Check.svg?react"


export default function PageComponents() {
    return (
  <Container>
    <div className="grid gap-10">
      <div className="flex flex-col gap-1">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo!
        </Text>
        <Text className="text-green-base">
          Olá mundo!
        </Text>
        <Text variant="body-md-bold">
          Olá mundo!
        </Text>
        <Text>
          Levar o dog pra passear
        </Text>
      </div>

      <div className="flex gap-1">
        <Icon svg = {TrashIcon} className="fill-pink-base"/>
        <Icon svg = {CheckIcon} />
        <Icon svg = {PlusIcon} />
        <Icon svg = {SpinnerIcon} animate/>
        <Icon svg = {PencilIcon} />
        <Icon svg = {XIcon} />
      </div>

      <div className="flex gap-1">
        <Badge variant="secondary">2</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge loading>5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
        <Button icon={PlusIcon} handling>Criando</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon}></ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant="secondary"></ButtonIcon>
        <ButtonIcon icon={TrashIcon} variant="tertiary"></ButtonIcon>
        <ButtonIcon icon={TrashIcon} loading></ButtonIcon>
        <ButtonIcon icon={TrashIcon} handling></ButtonIcon>
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckBox />
        <InputCheckBox loading />
      </div>

      <div>
        <Card size="md">Olá mundo</Card>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6" />
        <Skeleton className="h-6"/>
        <Skeleton className="w-96 h-6" />
      </div>
    </div>
  </Container>
  ); 
}