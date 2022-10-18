import { Item } from "./styles";
import "../../styles/index.css"

interface TaskItemProps{
    titulo: string;
    done?: boolean;
    concluirTarefa: () => void;
}

export default function TaskItem(props: TaskItemProps) {
    return (
        <Item className="box" done={props.done}>
            <span>❌</span>
            <p>{props.titulo}</p>
            <span onClick={props.concluirTarefa}>✔</span>
        </Item>
    );
}