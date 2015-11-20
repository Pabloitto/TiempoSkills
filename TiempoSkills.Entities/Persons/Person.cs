using MongoRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TiempoSkills.DTOS.Skills;
using TiempoSkills.Entities;

namespace TiempoSkills.DTOS.Persons
{
    [Serializable]
    public class Person : EntityBase, IEntity
    {
        public Person()
        {
            this.PersonSkills = new List<Skill>();
        }

        public string Name { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public IList<Skill> PersonSkills { get; set; }
    }
}
