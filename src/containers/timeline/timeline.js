class TimelineEvent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const eventStyle = {
            height: this.props.eventValue + "px",
            backgroundColor: this.props.eventColor
        }
        return (
            <div className={"value"} style={eventStyle} title={this.props.eventName}>
            </div>
        );
    }
}

class TimelineDay extends React.Component {
    constructor(props) {
        super(props);
        this.dayBreakdown = this.dayBreakdown.bind(this);
    }
    dayBreakdown(dayNumber) {
        this.props.toggleMode();
    }
    render() {
        const Events =
            this.props.events
                .map((event, i) => <TimelineEvent key={i} eventValue={event.value} eventColor={event.color} eventName={event.name} />);
        return (
            <div className={"day"}>
                <div className={"dayStats"}>
                    {Events}
                </div>
                <div className={"dayLabel"} onClick={this.dayBreakdown}>
                    {this.props.name}
                </div>
            </div>
        );
    }
}

class TimelineMonth extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Days =
            this.props.days
                .map((day, i) => <TimelineDay key={i} name={day.number} events={day.events} toggleMode={this.props.toggleMode} />);
        return (
            <div className={"month"}>
                <div className={"monthDays"}>
                    {Days}
                </div>
                <div className={"monthDivider"} />
                <div className={"monthLabel"}>
                    {this.props.name}
                </div>
            </div>
        );
    }
}

class TimelineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.backToMonths = this.backToMonths.bind(this);
    }
    backToMonths() {
        this.props.toggleMode();
    }
    render() {
        let Months = [];
        if (this.props.mode == "months") {
            Months = [
                {
                    name: "January",
                    days: [
                        {
                            number: "1", events: [
                                { value: 5, color: "#e67e22", name: "Gunshots" },
                                { value: 10, color: "#c0392b", name: "Murders" },
                                { value: 25, color: "#f39c12", name: "Cad Calls" },
                                { value: 25, color: "#8e44ad", name: "Frauds" },
                            ]
                        },
                        {
                            number: "2", events: [
                                { value: 15, color: "#e67e22", name: "Gunshots" },
                                { value: 14, color: "#c0392b", name: "Murders" },
                                { value: 18, color: "#f39c12", name: "Cad Calls" },
                                { value: 20, color: "#8e44ad", name: "Frauds" },
                            ]
                        },
                        {
                            number: "3", events: [
                                { value: 15, color: "#e67e22", name: "Gunshots" },
                                { value: 14, color: "#c0392b", name: "Murders" },
                                { value: 18, color: "#f39c12", name: "Cad Calls" },
                                { value: 20, color: "#8e44ad", name: "Frauds" },
                            ]
                        }
                    ]
                }
            ].map((month, i) => <TimelineMonth key={i} name={month.name} days={month.days} toggleMode={this.props.toggleMode} />);
        }
        else {
            Months = [
                {
                    name: "1st January 2017",
                    days: [
                        {
                            number: "11:00", events: [
                                { value: 5, color: "#e67e22", name: "Gunshots" },
                                { value: 10, color: "#c0392b", name: "Murders" },
                                { value: 25, color: "#f39c12", name: "Cad Calls" },
                                { value: 25, color: "#8e44ad", name: "Frauds" },
                            ]
                        },
                        {
                            number: "12:00", events: [
                                { value: 15, color: "#e67e22", name: "Gunshots" },
                                { value: 14, color: "#c0392b", name: "Murders" },
                                { value: 18, color: "#f39c12", name: "Cad Calls" },
                                { value: 20, color: "#8e44ad", name: "Frauds" },
                            ]
                        }
                    ]
                }
            ].map((month, i) => <TimelineMonth key={i} name={month.name} days={month.days} toggleMode={this.props.toggleMode} />);
        }

        return (
            <div className={"timelContainer" + this.props.expanded.toString()} >
                <a href="#" onClick={this.backToMonths} className={(this.props.mode != "months" ? 'timelBackToMonths' : 'hidden')}>
                    <i className={"fa fa-caret-left"}></i>
                </a>
                {Months}
            </div>
        );
    }
}

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Timeline",
            expanded: false,
            mode: "months"
        }
        this.toggleTimeline = this.toggleTimeline.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
    }
    toggleMode() {
        if (this.state.mode == "months") {
            this.setState({ mode: "day" });
        }
        else {
            this.setState({ mode: "months" });
        }
    }
    toggleTimeline(e) {
        e.preventDefault();
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        return (
            <div className={"timeline"}>
                <h3>{this.state.name}</h3>
                <a href="#" onClick={this.toggleTimeline}>
                    <i className={"fa fa-bar-chart"}></i> (click to view Timeline)
        </a>
                <TimelineGraph expanded={this.state.expanded} mode={this.state.mode} toggleMode={this.toggleMode} />
            </div>
        );
    }
}

ReactDOM.render(
    <Timeline />,
    document.getElementById('container')
);