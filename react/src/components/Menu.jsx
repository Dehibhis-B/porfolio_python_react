import React from 'react'
import { useState } from 'react';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/solid';

export default function Menu() {
    const [timecards, setTimecards] = useState([
        { date: 'Sun 2/20', schedule: '8:30 AM - 5:00 PM', absence: '', in: '', transfer: '', out: '', in2: '' },
        { date: 'Mon 2/21', schedule: '8:30 AM - 5:00 PM', absence: '', in: '', transfer: '', out: '', in2: '' },
        { date: 'Tue 2/22', schedule: '8:30 AM - 5:00 PM', absence: '', in: '8:30 AM', transfer: '', out: '5:00 PM', in2: '' },
        { date: 'Wed 2/23', schedule: '8:30 AM - 5:00 PM', absence: '', in: '8:30 AM', transfer: '', out: '5:00 PM', in2: '' },
        { date: 'Thu 2/24', schedule: '8:30 AM - 5:00 PM', absence: '', in: '8:30 AM', transfer: '', out: '5:00 PM', in2: '' },
        { date: 'Fri 2/25', schedule: '8:30 AM - 5:00 PM', absence: '', in: '8:30 AM', transfer: '', out: '5:00 PM', in2: '' },
        { date: 'Sat 2/26', schedule: '8:30 AM - 5:00 PM', absence: '', in: '', transfer: '', out: '5:00 PM', in2: '' },
      ]);
    
      return (
        <div className="bg-gray-100 min-h-screen">
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h1 className="text-2xl font-bold">Employee Timecards</h1>
                </div>
                <div>
                  <p className="text-green-600">Brooks, Bob S</p>
                  <p className="text-green-600">51015 9 of 75</p>
                  <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                </div>
              </div>
    
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-2 text-left">
                      <PlusIcon className="w-4 h-4 text-green-500" />
                    </th>
                    <th className="p-2 text-left">Date</th>
                    <th className="p-2 text-left">Schedule</th>
                    <th className="p-2 text-left">Absence</th>
                    <th className="p-2 text-left">In</th>
                    <th className="p-2 text-left">Transfer</th>
                    <th className="p-2 text-left">Out</th>
                    <th className="p-2 text-left">In</th>
                  </tr>
                </thead>
                <tbody>
                  {timecards.map((timecard, index) => (
                    <tr key={index}>
                      <td className="p-2">
                        <PlusIcon className="w-4 h-4 text-gray-500" />
                      </td>
                      <td className="p-2 text-left text-green-500">{timecard.date}</td>
                      <td className="p-2 text-left text-green-500 ">{timecard.schedule}</td>
                      <td className="p-2 text-left text-green-500 ">{timecard.absence}</td>
                      <td className="p-2 text-left text-green-500 ">{timecard.in}</td>
                      <td className="p-2 text-left text-green-500 ">{timecard.transfer}</td>
                      <td className="p-2 text-left text-green-500">{timecard.out}</td>
                      <td className="p-2 text-left text-green-500">{timecard.in2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
  
  
}




  

