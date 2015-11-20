using MongoRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TiempoSkills.Entities;

namespace TiempoSkills.DTOS.Skills
{
    [Serializable]
    public class Skill : EntityBase, IEntity
    {
        public string Name { get; set; }
        public int Level { get; set; }
    }
}
