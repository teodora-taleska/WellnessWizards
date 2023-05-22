import React from "react";
import { Link } from "react-router-dom";

const Calendar = () => {
    return(
        <div className="calendar">
            <div className="forms-header">
                <Link to='/my-plans-hp'><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                <h4 className="calendar-header"></h4>
            </div>
            <div className="calendar-body">
                <div className="cal-header">
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                    <h4>December 2022</h4>
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </div>
                <div className="days">
                    <table>
                        <tr>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Sun</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                        </tr>
                        <tr>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                        </tr>
                        <tr>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                            <th>16</th>
                            <th>17</th>
                            <th>18</th>
                        </tr>
                        <tr>
                            <th>19</th>
                            <th>20</th>
                            <th>21</th>
                            <th>22</th>
                            <th>23</th>
                            <th>24</th>
                            <th>25</th>
                        </tr>
                        <tr>
                            <th>26</th>
                            <th>27</th>
                            <th>28</th>
                            <th>29</th>
                            <th>30</th>
                            <th>31</th>
                        </tr>
                    </table>
                </div>

            </div>
            
        </div>
    ) 
}

export default Calendar