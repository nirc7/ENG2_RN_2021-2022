using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] nums = new int[] { 2, 7, 4, 9, 5, 1 };

            IEnumerable<int> evens =
                (from num in nums
                 where num % 2 == 0
                 select num * 2).ToArray();
            nums[1] = 72;

            foreach (var n in evens)
            {
                Console.Write(n + ", ");
            }

            List<Student> students = new List<Student>() {
                new Student(){ID=2, Name="avi", Grade=98 },
                new Student(){ID=1, Name="benny", Grade= 99},
                new Student(){ID=4, Name="dora", Grade=97 },
                new Student(){ID=3, Name="charlie", Grade=100 },
            };

            Console.WriteLine();
            var bestStudents = from stu in students
                               where stu.Grade >= 99 && stu.Name.StartsWith("c")
                               select new {sN = stu.Name + ":)" , sG=stu.Grade*2};

            foreach (var item in bestStudents)
            {
                Console.WriteLine(item.sG + "-" + item.sN);
            }

            students.Where(stu => stu.Name == "avi").Select(stu=> new {sn= stu.Name, sg = stu.Grade });
        }
    }


    class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Grade { get; set; }

        public override string ToString()
        {
            return $"ID={ID},Name={Name},Grade={Grade}";
        }
    }
}
