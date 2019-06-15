package repository.other;


import repository.spec.impl.CustomerRepoimpl;

public class RepoFactory {
    public enum RepoTypes{
        CUSTOMER,ITEM,ORDERS,ORDER_DETAIL
    }

    public <T>T getRepo(RepoTypes repoTypes){
        switch (repoTypes){
            case CUSTOMER:
                return (T) new CustomerRepoimpl();
//            case ORDERS:
//                return (T) new OrderRepoimpl();
//            case ITEM:
//                return (T) new ItemRepoimpl();
//            case ORDER_DETAIL:
//                return (T) new OrderDetailRepoimpl();
            default:
                return null;
        }
    }
}
