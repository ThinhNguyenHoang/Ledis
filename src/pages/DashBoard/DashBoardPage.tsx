import Terminal from "../../components/Terminal/Terminal";
import "./DashboardPage.less";
import {useAppSelector} from "../../hooks/redux/hooks";
import {terminalSelector} from "../../redux/features/Terminal/TerminalSlice";

const DashBoardPage = () => {
    return (
        <div className={"DashboardContainer"}>
            <Terminal/>
        </div>
    );
};
export default DashBoardPage;
