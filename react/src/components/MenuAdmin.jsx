import { useState } from 'react';
import {
  CalendarIcon,
  PlusIcon,
  CheckIcon,
  ArrowRightIcon,
  UserCircleIcon,
  ClockIcon,
  CogIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export function MenuAdmin() {
  const [showEmployee, setShowEmployee] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const employees = [
    {
      id: 1,
      name: 'Brooks, Bob S',
      schedule: {
        sun: '8:30 AM - 5:00 PM',
        mon: '8:30 AM - 5:00 PM',
        tue: '8:30 AM - 5:00 PM',
        wed: '8:30 AM - 5:00 PM',
        thu: '8:30 AM - 5:00 PM',
        fri: '8:30 AM - 5:00 PM',
        sat: '8:30 AM - 5:00 PM',
      },
      timeInOut: [
        {
          day: 'Tue 2/22',
          in: '8:30 AM',
          out: '5:00 PM',
        },
        {
          day: 'Wed 2/23',
          in: '8:30 AM',
          out: '5:00 PM',
        },
        {
          day: 'Thu 2/24',
          in: '8:30 AM',
          out: '5:00 PM',
        },
        {
          day: 'Fri 2/25',
          in: '8:30 AM',
          out: '5:00 PM',
        },
        {
          day: 'Sat 2/26',
          in: '8:30 AM',
          out: '5:00 PM',
        },
      ],
    },
    // Add more employees here
  ];

  const handleEmployeeClick = (employee) => {
    setShowEmployee(true);
    setSelectedDate(null);
    setShowDetails(false);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowDetails(false);
  };

  const handleDetailsClick = (date) => {
    setShowDetails(true);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-teal-500 text-white py-4 px-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">UKG</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-teal-500 rounded-full px-4 py-2">
            <CogIcon className="h-5 w-5" />
          </button>
          <button className="bg-white text-teal-500 rounded-full px-4 py-2">
            <ShieldCheckIcon className="h-5 w-5" />
          </button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Employee Timecards</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button className="bg-white text-teal-500 rounded-full px-4 py-2">
              <CalendarIcon className="h-5 w-5" />
            </button>
            <div className="relative">
              <button className="bg-white text-teal-500 rounded-full px-4 py-2">
                <UserCircleIcon className="h-5 w-5" />
              </button>
              {showEmployee && (
                <div className="absolute top-full left-0 bg-white rounded-md shadow-md py-2 mt-2 z-10">
                  {employees.map((employee) => (
                    <button
                      key={employee.id}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => handleEmployeeClick(employee)}
                    >
                      {employee.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">51015</span>
              <ArrowRightIcon className="h-4 w-4" />
              <span className="text-sm">9 of 75</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-teal-500 rounded-full px-4 py-2">
              <ClockIcon className="h-5 w-5" />
            </button>
            <button className="bg-white text-teal-500 rounded-full px-4 py-2">
              <CogIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="bg-black rounded-md shadow-md p-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Schedule</th>
                <th className="px-4 py-2">Absence</th>
                <th className="px-4 py-2">In</th>
                <th className="px-4 py-2">Transfer</th>
                <th className="px-4 py-2">Out</th>
                <th className="px-4 py-2">In</th>
              </tr>
            </thead>
            <tbody>
              {selectedDate && (
                <tr>
                  <td className="px-4 py-2">
                    <PlusIcon className="h-5 w-5" />
                  </td>
                  <td className="px-4 py-2">{selectedDate}</td>
                  <td className="px-4 py-2">
                    <DocumentTextIcon className="h-5 w-5" />
                  </td>
                  <td className="px-4 py-2">
                    <DocumentTextIcon className="h-5 w-5" />
                  </td>
                  <td className="px-4 py-2">
                    <DocumentTextIcon className="h-5 w-5" />
                  </td>
                  <td className="px-4 py-2">
                    <DocumentTextIcon className="h-5 w-5" />
                  </td>
                  <td className="px-4 py-2">
                    <DocumentTextIcon className="h-5 w-5" />
                  </td>
                  <td className="px-4 py-2">
                    <DocumentTextIcon className="h-5 w-5" />
                  </td>
                </tr>
              )}
              {employees.map((employee) => (
                <>
                  {employee.timeInOut.map((timeInOut) => (
                    <tr
                      key={timeInOut.day}
                      className={
                        selectedDate === timeInOut.day
                          ? 'bg-gray-200'
                          : 'hover:bg-gray-200'
                      }
                    >
                      <td className="px-4 py-2">
                        <PlusIcon className="h-5 w-5" />
                      </td>
                      <td className="px-4 py-2">{timeInOut.day}</td>
                      <td className="px-4 py-2">
                        {employee.schedule[timeInOut.day.toLowerCase().slice(0, 3)]}
                      </td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2">{timeInOut.in}</td>
                      <td className="px-4 py-2"></td>
                      <td className="px-4 py-2">{timeInOut.out}</td>
                      <td className="px-4 py-2"></td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
        {showDetails && (
          <div className="bg-white rounded-md shadow-md p-4 mt-4">
            <h3 className="text-xl font-bold mb-2">Timecard Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-lg font-bold mb-2">Schedule</h4>
                <p className="mb-2">
                  {employee.schedule[selectedDate.toLowerCase().slice(0, 3)]}
                </p>
                <p className="mb-2">
                  {/* Add other schedule details here */}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-lg font-bold mb-2">Time In/Out</h4>
                <p className="mb-2">
                  {/* Display time in/out details for selected date */}
                </p>
                <p className="mb-2">
                  {/* Add other time in/out details here */}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-lg font-bold mb-2">Absence</h4>
                <p className="mb-2">
                  {/* Display absence details for selected date */}
                </p>
                <p className="mb-2">
                  {/* Add other absence details here */}
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-lg font-bold mb-2">Transfer</h4>
                <p className="mb-2">
                  {/* Display transfer details for selected date */}
                </p>
                <p className="mb-2">
                  {/* Add other transfer details here */}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

