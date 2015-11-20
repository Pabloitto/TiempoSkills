using MongoRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TiempoSkills.WebSite.Controllers
{
    public class BaseController<T> : Controller where T : IEntity
    {
        private IRepository<T> _repository;


        public ActionResult Index()
        {
            return View();
        }

        protected IRepository<T> Repository
        {
            get
            {
                if (_repository == null)
                {
                    _repository = new MongoRepository<T>();
                }
                return _repository;
            }
        }

    }
}
