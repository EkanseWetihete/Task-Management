// page.js

export default async function Home() {
  const randomNumbers1 = [];
  const randomNumbers2 = [];
  for (let i = 0; i < 12; i++) {
    randomNumbers1.push(getRandomNumber(1, 5));
    randomNumbers2.push(getRandomNumber(5, 10));
  }

  const response = await fetch('http://localhost:3000/api/tasks');
  const tasks = await response.json();
  
  return (
    <div>
      

      <div className="mb-2 px-3 w-1/2 mx-auto flex gap-2">
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Add Tables</button>
        <button className="flex-1 py-1 text-sm bg-blue-500 text-white rounded">Filter Tables</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['To Do', 'In Progress', 'Done'].map((title, index) => (
          <div key={title} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{title}</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">Add Tasks</button>
                <button className="px-3 py-1 bg-gray-500 text-white rounded">Sort Tasks</button>
              </div>
            </div>
            <ul className="space-y-3">
              {[1, 2, 3].map((num) => (
                <li key={num} className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg shadow border border-gray-400">
                  <div className="mb-2">
                    <h3 className="font-semibold">Užduotis {index * 3 + num}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Užduoties aprašymas Nr. {index * 3 + num}.</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10/12">
                      <span className="text-sm text-gray-500">Days Left: {randomNumbers2[(index * 3 + num)]}</span>
                      <span className="block text-sm font-medium">Progress bar: {randomNumbers1[(index * 2) + (num - 1)]} / {randomNumbers2[(index * 2) + (num - 1)]}</span>
                      <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(randomNumbers1[(index * 2) + (num - 1)] / randomNumbers2[(index * 2) + (num - 1)]) * 100}%` }}></div>
                      </div>
                    </div>
                    <button className="text-xs bg-yellow-400 text-black px-2 py-1 rounded self-end">Edit</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Testuojamas API kelias</h2>
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li key={task.id} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-300">
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">ID: {task.id}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{task.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}